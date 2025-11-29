import Image from "next/image"
import { Sparkles, Check } from "lucide-react"

const benefits = [
  {
    title: "Proteínas completas",
    description: "Los nueve aminoácidos esenciales en fuente vegetal.",
  },
  {
    title: "Fibra dietética",
    description: "Mejora la digestión y prolonga la saciedad.",
  },
  {
    title: "Omega 3 y 6",
    description: "Proporción 1:3 ideal para cerebro y corazón.",
  },
  {
    title: "Vitaminas y minerales",
    description: "Hierro, magnesio, zinc, calcio y vitaminas B.",
  },
]

export function Superalimento() {
  return (
    <section id="superalimento" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground text-center">
            Superalimento: cáñamo + chía
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <Image
                src="https://i.postimg.cc/bwxdNhqW/Whats-App-Image-2025-11-27-at-14-28-06.jpg"
                alt="Bol con harina de cáñamo y semillas"
                width={400}
                height={400}
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Content - Intro simplificada a una frase */}
          <div className="lg:order-1">
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Combinamos harina de cáñamo con semillas de chía para potenciar estos beneficios:
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg text-foreground/80 font-medium">
              Pizzas y pastas que funcionan como <strong className="text-primary">suplemento dietario natural</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
