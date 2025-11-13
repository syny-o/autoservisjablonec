"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Testimonials />
      <Work />
      < Faq />
      <Footer />
    </div>
  )
}

export default Home
