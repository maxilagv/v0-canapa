import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.postimg.cc/Mp5pYkDC/Gemini-Generated-Image-dxjd7bdxjd7bdxjd.png"
          alt="Campo de cáñamo al atardecer con cosechadora"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://i.postimg.cc/Kj3bXwBH/Whats-App-Image-2025-11-27-at-14-24-51.jpg"
            alt="Logo Canapa vertical"
            width={120}
            height={120}
            className="rounded-full shadow-2xl border-4 border-white/20"
          />
        </div>

        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance max-w-4xl mx-auto leading-tight">
          Primeros en elaborar alimentos con harina de cáñamo en Argentina
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty">
          Pizzas y pastas enriquecidas con cáñamo y chía: nutrición real en tus platos de siempre.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <a href="#que-es">
            Conocé el cáñamo
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
