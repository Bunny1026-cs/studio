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
import { Badge } from '@/components/ui/badge';
import { counselors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CounselorsPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Find a Counselor</h1>
        <p className="text-muted-foreground">
          Browse our team of certified professionals and find the right one for
          you.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {counselors.map((counselor) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === counselor.imageUrlId
          );
          return (
            <Card key={counselor.id} className="flex flex-col bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={`Portrait of ${counselor.name}`}
                    width={400}
                    height={400}
                    className="w-full h-auto aspect-square object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                  <CardTitle>{counselor.name}</CardTitle>
                  <CardDescription className="mt-1">
                      <Badge variant="secondary">{counselor.specialty}</Badge>
                  </CardDescription>
                <CardContent className="p-0 pt-4 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {counselor.bio}
                  </p>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/counselors/${counselor.id}`}>
                      View Profile & Book
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
