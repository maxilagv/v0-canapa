"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.postimg.cc/bYgsbFJJ/Gemini-Generated-Image-eugfq6eugfq6eugf.png"
          alt="Campo de cáñamo al atardecer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-background/20 to-secondary/80 animated-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance max-w-4xl mx-auto leading-tight drop-shadow-lg">
          Primeros en elaborar alimentos con harina de cáñamo en Argentina
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty drop-shadow-sm">
          Alimentos enriquecidos con proteina de cáñamo: nutrición real en tus platos de siempre.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-10 py-8 rounded-full shadow-2xl hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300"
        >
          <a href="#que-es">
            Conocé el cáñamo
            <ChevronDown className="ml-2 h-6 w-6" />
          </a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-fade-in-up">
        <a href="#distribuidores" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
