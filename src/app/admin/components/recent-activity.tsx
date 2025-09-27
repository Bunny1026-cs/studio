import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { counselors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function RecentActivity() {
  const recentBookings = counselors.slice(0, 5);

  return (
    <div className="space-y-8">
      {recentBookings.map((counselor, index) => {
        const image = PlaceHolderImages.find(p => p.id === counselor.imageUrlId);
        const initials = counselor.name.split(' ').map(n => n[0]).join('');

        return (
            <div key={counselor.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              {image && <AvatarImage src={image.imageUrl} alt="Avatar" />}
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">New Booking</p>
              <p className="text-sm text-muted-foreground">
                Session booked with {counselor.name}.
              </p>
            </div>
            <div className="ml-auto font-medium text-sm text-muted-foreground">+{index + 1}h ago</div>
          </div>
        )
      })}
    </div>
  );
}
