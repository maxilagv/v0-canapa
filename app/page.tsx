import { Hero } from "@/components/sections/hero"
import { QueEsCanamo } from "@/components/sections/que-es-canamo"
import { Superalimento } from "@/components/sections/superalimento"
import { Beneficios } from "@/components/sections/beneficios"
import { RevolucionPasta } from "@/components/sections/revolucion-pasta"
import { Proceso } from "@/components/sections/proceso"
import { SomosCanapa } from "@/components/sections/somos-canapa"
import { Preparacion } from "@/components/sections/preparacion"
import { FAQ } from "@/components/sections/faq"
import { Contacto } from "@/components/sections/contacto"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QueEsCanamo />
      <Superalimento />
      <Beneficios />
      <RevolucionPasta />
      <Proceso />
      <SomosCanapa />
      <Preparacion />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  )
}
