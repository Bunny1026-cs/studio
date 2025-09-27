import AssessmentClient from './assessment-client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function AssessmentPage() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Wellness Assessment</CardTitle>
          <CardDescription className="text-center">
            Take a moment to check in with yourself. Your answers are confidential.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AssessmentClient />
        </CardContent>
      </Card>
    </div>
  );
}
