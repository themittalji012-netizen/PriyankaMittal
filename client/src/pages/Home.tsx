import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import EducationSection from '@/components/EducationSection';
import BookshelfSection from '@/components/BookshelfSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';

export default function Home() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HomeSection />
      <EducationSection />
      <BookshelfSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
