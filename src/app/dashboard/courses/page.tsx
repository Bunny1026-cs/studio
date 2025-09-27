import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { resources } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Progress } from '@/components/ui/progress';
import * as Lucide from 'lucide-react';

export default function CoursesPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Wellness Courses</h1>
        <p className="text-muted-foreground">
          Complete these modules to unlock your reassessment and track your progress.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === resource.imageUrlId
          );
          const Icon = Lucide[resource.icon] as Lucide.LucideIcon;
          const progress = (index / (resources.length -1)) * 60 + 15 * (index % 2); // Mock progress

          return (
            <Card key={resource.id} className="flex flex-col bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0 relative">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={resource.title}
                    width={600}
                    height={400}
                    className="w-full h-auto aspect-video object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                 <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle>{resource.title}</CardTitle>
                <CardContent className="p-0 pt-2 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {resource.description}
                  </p>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex-col items-start gap-2">
                   <div className="w-full">
                      <Progress value={progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{Math.round(progress)}% complete</p>
                   </div>
                  <Button asChild className="w-full mt-2">
                    <Link href="#">
                      Continue Course
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
