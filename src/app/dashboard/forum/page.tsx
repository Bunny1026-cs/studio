import { forumPosts } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function ForumPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Peer Support Forum</h1>
          <p className="text-muted-foreground">
            Connect anonymously with other students. Share and find support.
          </p>
        </div>
        <Button>Create a Post</Button>
      </div>

      <div className="space-y-4">
        {forumPosts.map((post) => (
          <Card key={post.id} className="bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                Posted by {post.author} &bull; {post.createdAt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">{post.content}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-muted-foreground">
                <ArrowUp className="h-4 w-4" />
                <span>{post.upvotes} Upvotes</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments} Comments</span>
              </div>
              <Button variant="ghost" className="ml-auto">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
