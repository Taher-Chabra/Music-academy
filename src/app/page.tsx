import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicAcademyTestimonialCards from "@/components/TestimonialsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen dark:bg-slate-900 bg-slate-400 antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.05]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicAcademyTestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
