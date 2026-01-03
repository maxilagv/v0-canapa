import { Hero } from "@/components/sections/hero"
import { Distribuidores } from "@/components/sections/distribuidores"
import { QueEsCanamo } from "@/components/sections/que-es-canamo"
import { Superalimento } from "@/components/sections/superalimento"
import { Beneficios } from "@/components/sections/beneficios"
import { ProductosDestacados } from "@/components/sections/productos-destacados"
import { Proceso } from "@/components/sections/proceso"
import { SomosCanapa } from "@/components/sections/somos-canapa"
import { SabiasQue } from "@/components/sections/sabias-que"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductosDestacados />
      <QueEsCanamo />
      <Superalimento />
      <Beneficios />
      <Proceso />
      <SomosCanapa />
      <SabiasQue />
      <Distribuidores />
      <Footer />
    </main>
  )
}
