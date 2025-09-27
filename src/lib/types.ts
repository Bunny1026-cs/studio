import type { LucideIcon } from 'lucide-react';

export type Counselor = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrlId: string;
};

export type Resource = {
  id: string;
  title: string;
  type: 'article' | 'video' | 'audio';
  description: string;
  imageUrlId: string;
  icon: keyof typeof import('lucide-react');
};

export type ForumPost = {
  id: string;
  title: string;
  author: string;
  content: string;
  upvotes: number;
  comments: number;
  createdAt: string;
};

export type AssessmentQuestion = {
  question: string;
  options: string[];
  points: number[];
};
