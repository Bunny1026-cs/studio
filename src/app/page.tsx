import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex justify-start">
        <Logo />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20 dark:opacity-100 dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]">
        </div>
        
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline">
            Welcome to Synapse
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Your confidential space for mental wellness and support. Connect with AI companions, book counselors, and find resources to help you thrive.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Synapse. All rights reserved.</p>
      </footer>
    </div>
  );
}
