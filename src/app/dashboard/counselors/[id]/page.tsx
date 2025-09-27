import Image from 'next/image';
import { notFound } from 'next/navigation';
import { counselors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CounselorDetailPage({ params }: { params: { id: string } }) {
  const counselor = counselors.find((c) => c.id === params.id);

  if (!counselor) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === counselor.imageUrlId);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 space-y-6">
        <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20">
          <CardHeader className="p-0">
             {image && (
              <Image
                src={image.imageUrl}
                alt={`Portrait of ${counselor.name}`}
                width={400}
                height={400}
                className="w-full h-auto rounded-t-lg aspect-square object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
          </CardHeader>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold">{counselor.name}</h1>
            <Badge variant="accent" className="mt-2 bg-accent/50 text-accent-foreground">{counselor.specialty}</Badge>
          </CardContent>
        </Card>
        <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{counselor.bio}</p>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle>Book an Appointment</CardTitle>
            <CardDescription>Select an available date to schedule your confidential session.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Calendar
              mode="single"
              className="rounded-md border"
            />
            <Button className="mt-6 w-full max-w-sm">Confirm Booking</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
