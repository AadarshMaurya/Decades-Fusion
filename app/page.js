
import Hero from "@/components/home/Hero"
import ImpactBar from "@/components/home/ImpactBar"
import FeaturedCollection from "@/components/home/FeaturedCollection"
import SustainabilitySection from "@/components/home/SustainabilitySection"
import BestSellers from "@/components/home/BestSellers"
import Testimonials from "@/components/home/Testimonials"
import BlogSection from "@/components/home/BlogSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <ImpactBar />
      <FeaturedCollection />
      <SustainabilitySection />
      <BestSellers />
      <Testimonials />
      <BlogSection />
    </main>
  )
}
