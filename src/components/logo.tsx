import { cn } from '@/lib/utils';
import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/dashboard" className={cn('flex items-center gap-2 text-primary font-bold text-lg', className)}>
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M10 17c-2.2 0-4-1.8-4-4s1.8-4 4-4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4" />
          <path d="M14 7c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4s1.8-4 4-4h4" />
        </svg>
      </div>
      <span className="font-headline text-2xl tracking-tight">Synapse</span>
    </Link>
  );
};

export default Logo;
