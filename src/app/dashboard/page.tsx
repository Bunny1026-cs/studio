'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HeartPulse, MessageSquare, Users, BookOpen, MessageSquareIcon, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

const baseFeatures = [
  {
    title: 'Wellness Courses',
    description: 'Explore our courses designed to help you manage stress, anxiety, and more.',
    href: '/dashboard/courses',
    icon: BookOpen,
    cta: 'View Courses',
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
    title: 'Peer Forum',
    description: 'Connect with other students in a safe and anonymous space.',
    href: '/dashboard/forum',
    icon: MessageSquareIcon,
    cta: 'Visit Forum',
  },
];

const initialAssessmentFeature = {
  title: 'Initial Assessment',
  description: 'New here? Take our initial assessment to get started on your wellness journey.',
  href: '/dashboard/assessment',
  icon: HeartPulse,
  cta: 'Start Assessment',
};

const reassessmentFeature = {
  title: 'Reassessment',
  description: 'Completed your courses? Take a reassessment to track your progress.',
  href: '/dashboard/reassessment',
  icon: ClipboardCheck,
  cta: 'Take Reassessment',
};


export default function DashboardPage() {
  // TODO: Replace with real user data from Firestore
  // This state will determine if the user has completed the initial assessment.
  const [isNewUser, setIsNewUser] = useState(true); 

  const features = isNewUser
    ? [initialAssessmentFeature, ...baseFeatures]
    : [reassessmentFeature, ...baseFeatures];


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
