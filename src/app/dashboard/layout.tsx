import Logo from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="hidden md:flex">
          <Logo />
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Logo />
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link href="/dashboard/assessment" className="text-muted-foreground hover:text-foreground">
                Assessment
              </Link>
              <Link href="/dashboard/chat" className="text-muted-foreground hover:text-foreground">
                AI Chat
              </Link>
              <Link href="/dashboard/counselors" className="text-muted-foreground hover:text-foreground">
                Counselors
              </Link>
              <Link href="/dashboard/resources" className="text-muted-foreground hover:text-foreground">
                Resources
              </Link>
               <Link href="/dashboard/forum" className="text-muted-foreground hover:text-foreground">
                Forum
              </Link>
               <Link href="/admin" className="text-muted-foreground hover:text-foreground">
                Admin
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        {/* End Mobile Nav */}
        
        <div className="flex w-full items-center justify-between md:justify-end gap-4 md:ml-auto">
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <UserNav />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
