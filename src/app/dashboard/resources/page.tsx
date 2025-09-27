import Image from 'next/image';
import Link from 'next/link';
import * as Lucide from 'lucide-react';
import { resources } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Resource } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const renderResources = (filterType?: Resource['type']) => {
  const filteredResources = filterType
    ? resources.filter((r) => r.type === filterType)
    : resources;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredResources.map((resource) => {
        const image = PlaceHolderImages.find(
          (img) => img.id === resource.imageUrlId
        );
        const Icon = Lucide[resource.icon] as Lucide.LucideIcon;

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
              <CardFooter className="p-0 pt-4">
                <Button variant="outline" className="w-full">
                  Access Resource
                </Button>
              </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resource Hub</h1>
        <p className="text-muted-foreground">
          Explore our curated library of articles, videos, and audio content.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-md">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">{renderResources()}</TabsContent>
        <TabsContent value="articles" className="mt-6">{renderResources('article')}</TabsContent>
        <TabsContent value="videos" className="mt-6">{renderResources('video')}</TabsContent>
        <TabsContent value="audio" className="mt-6">{renderResources('audio')}</TabsContent>
      </Tabs>
    </div>
  );
}
