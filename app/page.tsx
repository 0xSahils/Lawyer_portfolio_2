import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PracticeAreas from "@/components/practice-areas"
import StatsSection from "@/components/stats-section"
import PortfolioSection from "@/components/portfolio-section"
import AchievementsSection from "@/components/achievements-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import GallerySection from "@/components/gallery-section"
import CommunitySection from "@/components/community-section"
import InstagramFeed from "@/components/instagram-feed"
import ContactSection from "@/components/contact-section"
import FloatingContact from "@/components/floating-contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PracticeAreas />
      <StatsSection />
      <PortfolioSection />
      <AchievementsSection />
      <TestimonialsSection />
      <BlogSection />
      <GallerySection />
      <CommunitySection />
      <InstagramFeed />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
