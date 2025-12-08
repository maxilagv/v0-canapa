import { Hero } from "@/components/sections/hero"
import { LeyFinanciamiento } from "@/components/sections/ley-financiamiento"
import { Distribuidores } from "@/components/sections/distribuidores"
import { QueEsCanamo } from "@/components/sections/que-es-canamo"
import { Superalimento } from "@/components/sections/superalimento"
import { Beneficios } from "@/components/sections/beneficios"
import { ProductosDestacados } from "@/components/sections/productos-destacados"
import { Proceso } from "@/components/sections/proceso"
import { SomosCanapa } from "@/components/sections/somos-canapa"
import { FAQ } from "@/components/sections/faq"
import { Contacto } from "@/components/sections/contacto"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Distribuidores />
      <ProductosDestacados />
      <QueEsCanamo />
      <Superalimento />
      <Beneficios />
      <Proceso />
      <SomosCanapa />
      <FAQ />
      <Contacto />
      <LeyFinanciamiento />
      <Footer />
    </main>
  )
}
