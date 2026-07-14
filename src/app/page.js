import ClientsMarquee from '@/components/home/ClientsMarquee';
import ContactCTA from '@/components/home/ContactCTA';
import Process from '@/components/home/Process';
import Services from '@/components/home/Services';
import Showcase from '@/components/home/Showcase';
import Stats from '@/components/home/Stats';
import WhyRamaora from '@/components/home/WhyRamaora';
import { CinematicHero } from '@/components/ui/cinematic-app-hero';

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <main>
        <ClientsMarquee />
        <Services />
        <Process />
        <Stats />
        <WhyRamaora />
        <Showcase />
        <ContactCTA />
      </main>
    </>
  );
}
