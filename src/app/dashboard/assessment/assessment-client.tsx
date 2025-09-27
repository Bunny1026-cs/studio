'use client';

import { useState } from 'react';
import { assessmentQuestions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Smile, Meh, Frown } from 'lucide-react';

export default function AssessmentClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = assessmentQuestions.length;
  const progress = (currentStep / totalQuestions) * 100;

  const handleNext = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore(newAnswers);
      setIsCompleted(true);
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    const points = assessmentQuestions[currentStep].points[optionIndex];
    handleNext(points);
  };
  
  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  }

  const [score, setScore] = useState(0);
  const calculateScore = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((acc, curr) => acc + curr, 0);
    setScore(totalScore);
  };

  const getScoreFeedback = () => {
    if (score <= 5) {
      return {
        title: "You're doing great!",
        message: "Your responses suggest a low level of distress. Keep up the healthy habits and remember to check in with yourself regularly.",
        icon: Smile,
        color: "text-green-500",
      };
    } else if (score <= 10) {
      return {
        title: "Some challenges noted.",
        message: "Your responses indicate some mild to moderate distress. It might be helpful to explore some resources or talk to someone. We're here to help.",
        icon: Meh,
        color: "text-yellow-500",
      };
    } else {
      return {
        title: "It's okay to ask for help.",
        message: "Your responses suggest you may be facing significant challenges right now. We strongly encourage you to connect with a counselor or use our support resources.",
        icon: Frown,
        color: "text-red-500",
      };
    }
  };

  if (isCompleted) {
    const feedback = getScoreFeedback();
    return (
      <div className="text-center flex flex-col items-center">
        <feedback.icon className={`h-16 w-16 mb-4 ${feedback.color}`} />
        <h3 className="text-xl font-semibold mb-2">{feedback.title}</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">{feedback.message}</p>
        <div className="flex gap-4">
          <Button onClick={handleRestart}>Take Again</Button>
          <Button variant="outline">Explore Resources</Button>
        </div>
      </div>
    );
  }

  const question = assessmentQuestions[currentStep];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground text-center">Question {currentStep + 1} of {totalQuestions}</p>
      </div>

      <p className="text-lg font-medium text-center">{question.question}</p>

      <RadioGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <div key={index}>
            <RadioGroupItem value={option} id={`option-${index}`} className="peer sr-only" onClick={() => handleSelectOption(index)} />
            <Label
              htmlFor={`option-${index}`}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
