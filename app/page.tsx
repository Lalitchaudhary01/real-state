import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ProductCatalog from "@/components/home/ProductCatalog";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkGallery from "@/components/home/WorkGallery";
import ProcessSteps from "@/components/home/ProcessSteps";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import CtaBanner from "@/components/home/CtaBanner";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      {/* Section B: Hero (Landing / First Screen) */}
      <Hero />

      {/* Section F: Featured Projects Portfolio (Placed right below Hero) */}
      <FeaturedProjects />

      {/* Section C: About Us Introduction */}
      <AboutPreview />

      {/* Section D: Product Catalogue (11 products with filtering) */}
      <ProductCatalog />

      {/* Section E: Services Section (Alternating layout) */}
      <ServicesShowcase />

      {/* Section G: Why Choose Us (6 Advantages) */}
      <WhyChooseUs />

      {/* Section H: Our Work / Gallery (With Lightbox) */}
      <WorkGallery />

      {/* Section I: Our Process (4 Steps) */}
      <ProcessSteps />

      {/* Section J: Testimonials Carousel */}
      <TestimonialSlider />

      {/* Section K: Call To Action Banner */}
      <CtaBanner />

      {/* Section L: Contact & Location Section */}
      <ContactSection />
    </>
  );
}
