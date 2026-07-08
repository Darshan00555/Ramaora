import Navbar from '@/components/Navbar';
import { CinematicHero } from '@/components/ui/cinematic-app-hero';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <Navbar />
      <CinematicHero />
    </div>
  );
}
