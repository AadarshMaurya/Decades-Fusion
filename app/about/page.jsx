
'use client';
import Hero from "@/components/home/Hero"
import ImpactBar from "@/components/home/ImpactBar"
import FeaturedCollection from "@/components/home/FeaturedCollection"
import SustainabilitySection from "@/components/home/SustainabilitySection"
import BestSellers from "@/components/home/BestSellers"
import Testimonials from "@/components/home/Testimonials"
import BlogSection from "@/components/home/BlogSection"
import PrimaryBtn from "@/components/ui/button-primary/page"
import React from 'react'



const page = () => {
  const handleclick =()=>{

    console.log("clicked");
  }
  return (
 <>
      <div>about page is coming soon <PrimaryBtn onClick={handleclick} label="test-button"/>
        </div> 
 </>
  )
}

export default page