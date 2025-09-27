import type { Counselor, Resource, ForumPost, AssessmentQuestion } from './types';

export const counselors: Counselor[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    specialty: 'Cognitive Behavioral Therapy (CBT)',
    bio: 'Dr. Carter specializes in helping students manage anxiety, stress, and academic pressure using evidence-based CBT techniques.',
    imageUrlId: 'counselor-1',
  },
  {
    id: '2',
    name: 'Dr. Ben Adams',
    specialty: 'Mindfulness & Stress Reduction',
    bio: 'With a focus on mindfulness, Dr. Adams guides students in developing coping mechanisms for life\'s challenges and improving overall well-being.',
    imageUrlId: 'counselor-2',
  },
  {
    id: '3',
    name: 'Dr. Chloe Davis',
    specialty: 'Relationship & Family Counseling',
    bio: 'Dr. Davis provides a safe space for students to explore interpersonal challenges, whether with family, friends, or partners.',
    imageUrlId: 'counselor-3',
  },
  {
    id: '4',
    name: 'Dr. Samuel Rodriguez',
    specialty: 'Depression & Mood Disorders',
    bio: 'Dr. Rodriguez offers compassionate support and treatment for students experiencing symptoms of depression and other mood disorders.',
    imageUrlId: 'counselor-4',
  },
];

export const resources: Resource[] = [
  {
    id: '1',
    title: '5 Simple Ways to Manage Stress',
    type: 'article',
    description: 'Learn practical, everyday techniques to keep stress at bay.',
    imageUrlId: 'resource-stress',
    icon: 'FileText',
  },
  {
    id: '2',
    title: 'Understanding Anxiety: A Guided Video',
    type: 'video',
    description: 'This animated video breaks down what anxiety is and how it affects you.',
    imageUrlId: 'resource-anxiety',
    icon: 'Video',
  },
  {
    id: '3',
    title: '10-Minute Mindfulness Meditation',
    type: 'audio',
    description: 'A short, guided audio session to help you recenter and find calm.',
    imageUrlId: 'resource-mindfulness',
    icon: 'Music',
  },
  {
    id: '4',
    title: 'Navigating Symptoms of Depression',
    type: 'article',
    description: 'An informative article on recognizing and addressing signs of depression.',
    imageUrlId: 'resource-depression',
    icon: 'FileText',
  },
];

export const forumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Feeling overwhelmed with finals week. Any tips?',
    author: 'Anonymous',
    content: 'I\'m really struggling to balance studying for all my exams and not get completely burned out. It feels like there\'s not enough time in the day. How do you all cope with the pressure?',
    upvotes: 12,
    comments: 5,
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    title: 'Homesickness is hitting me hard this semester.',
    author: 'Anonymous',
    content: 'This is my first year away from home, and I\'m finding it really difficult to adjust. I miss my family and friends a lot. Does it get easier? Any advice would be appreciated.',
    upvotes: 28,
    comments: 11,
    createdAt: '1 day ago',
  },
  {
    id: '3',
    title: 'I\'m having trouble making friends in my classes.',
    author: 'Anonymous',
    content: 'It feels like everyone already has their friend groups and I\'m on the outside looking in. I try to be friendly but it\'s hard to start conversations. Anyone else feel this way?',
    upvotes: 19,
    comments: 8,
    createdAt: '3 days ago',
  },
];

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    question: 'Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    points: [0, 1, 2, 3],
  },
  {
    question: 'Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    points: [0, 1, 2, 3],
  },
  {
    question: 'Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    points: [0, 1, 2, 3],
  },
  {
    question: 'Over the last 2 weeks, how often have you been bothered by not being able to stop or control worrying?',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    points: [0, 1, 2, 3],
  },
  {
    question: 'How would you rate your sleep quality over the past 2 weeks?',
    options: ['Very good', 'Good', 'Poor', 'Very poor'],
    points: [0, 1, 2, 3],
  },
];
