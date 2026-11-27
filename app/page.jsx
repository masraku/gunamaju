import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ExploreSection from "@/components/sections/ExploreSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
      <AboutSection />
      <ExploreSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
