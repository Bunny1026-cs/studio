import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HeartPulse, MessageSquare, Users, BookOpen, MessageSquareIcon } from 'lucide-react';

const features = [
  {
    title: 'Wellness Assessment',
    description: 'Understand your current state of wellness with a quick assessment.',
    href: '/dashboard/assessment',
    icon: HeartPulse,
    cta: 'Start Assessment',
  },
  {
    title: 'AI Companion Chat',
    description: 'Talk to an AI companion anytime you need support or guidance.',
    href: '/dashboard/chat',
    icon: MessageSquare,
    cta: 'Start Chatting',
  },
  {
    title: 'Find a Counselor',
    description: 'Browse profiles and book appointments with professional counselors.',
    href: '/dashboard/counselors',
    icon: Users,
    cta: 'Browse Counselors',
  },
  {
    title: 'Resource Hub',
    description: 'Explore articles, videos, and audio on mental wellness topics.',
    href: '/dashboard/resources',
    icon: BookOpen,
    cta: 'Explore Resources',
  },
  {
    title: 'Peer Forum',
    description: 'Connect with other students in a safe and anonymous space.',
    href: '/dashboard/forum',
    icon: MessageSquareIcon,
    cta: 'Visit Forum',
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Hello, Student!</h2>
          <p className="text-muted-foreground">
            Here are some tools and resources to support your well-being.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">
                {feature.title}
              </CardTitle>
              <feature.icon className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild className="w-full">
                <Link href={feature.href}>
                  {feature.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
