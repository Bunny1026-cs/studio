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
        
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline">
            Welcome to SYNAPSE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            A confidential space for students to prioritize their mental well-being.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/login">Student Portal</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/login">Admin Portal</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} SYNAPSE. All rights reserved.</p>
      </footer>
    </div>
  );
}
