import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AnnouncementBar from "@/components/AnnouncementBar"
import ImpactBar from "@/components/ImpactBar"
import FeaturedCollection from "@/components/FeaturedCollection"
import SustainabilitySection from "@/components/SustainabilitySection"
import BestSellers from "@/components/BestSellers"
import Testimonials from "@/components/Testimonials"
import BlogSection from "@/components/BlogSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ImpactBar />
      <FeaturedCollection />
      <SustainabilitySection />
      <BestSellers />
      <Testimonials />
      <BlogSection />
      <Footer />
    </main>
  )
}
