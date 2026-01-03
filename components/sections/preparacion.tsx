import Image from "next/image"
import { Clock, Flame, Utensils } from "lucide-react"

const tips = [
  {
    icon: Flame,
    title: "Hervir",
    description: "Agua abundante con sal",
  },
  {
    icon: Clock,
    title: "10-12 min",
    description: "Tiempo de cocción",
  },
  {
    icon: Utensils,
    title: "Servir",
    description: "Colar y añadir salsa",
  },
]

export function Preparacion() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preparación y consumo
            </h2>
            <p className="text-lg text-foreground/70">Tan fácil como la pasta tradicional</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
                <Image
                  src="https://i.postimg.cc/WzmvbrYX/Whats-App-Image-2025-11-27-at-14-41-52.jpg"
                  alt="Etiqueta de instrucciones de cocción de los fideos de cáñamo"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Quick Tips */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {tips.map((tip, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <tip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-[var(--font-heading)] font-semibold text-sm mb-1 text-foreground">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-foreground/60">{tip.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Hervir <strong className="text-foreground">10–12 minutos</strong>, colar y servir. Textura agradable y
                  sabor suave para cualquier salsa.
                </p>
                <p>
                  Ideal con <strong className="text-foreground">verduras frescas, aceites de calidad y hierbas</strong>.
                </p>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <p className="text-sm text-foreground/80 flex items-center gap-2">
                  <span className="text-accent font-bold">#1</span>
                  Producto con harina de cáñamo en Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
