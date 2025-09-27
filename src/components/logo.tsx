import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/dashboard" className={cn('flex items-center gap-2 text-primary font-bold text-lg', className)}>
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <BrainCircuit className="h-5 w-5" />
      </div>
      <span className="font-headline text-2xl tracking-tight">SYNAPSE</span>
    </Link>
  );
};

export default Logo;
