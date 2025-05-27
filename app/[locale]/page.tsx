import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import FeaturedMenu from "@/components/home/featured-menu";
import ReservationCTA from "@/components/home/reservation-cta";
import GalleryPreview from "@/components/home/gallery-preview";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "@/i18n/navigation";
import {useTranslations} from 'next-intl';



export default async function Home() {


  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedMenu />
     {/* <TestimonialsSection /> */}
      <GalleryPreview />
      <ReservationCTA />
      <Footer />
    </main>
  );
}