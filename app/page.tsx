"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ServicesCatalog from "@/components/services-catalog"

export default function Home() {
  const [showCatalog, setShowCatalog] = useState(false)

  if (showCatalog) {
    return <ServicesCatalog onBack={() => setShowCatalog(false)} />
  }

  return (
    <main>
      <Header />
      <Hero />
      <Services onViewMore={() => setShowCatalog(true)} />
      <Contact />
      <Footer />
    </main>
  )
}
