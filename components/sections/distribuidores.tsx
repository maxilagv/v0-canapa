import { Button } from "@/components/ui/button"
import { TrendingUp, Leaf, Globe, ArrowRight } from "lucide-react"

const reasons = [
  {
    icon: TrendingUp,
    title: "Mercado emergente",
    description: "Alimentos saludables y funcionales en crecimiento exponencial.",
  },
  {
    icon: Leaf,
    title: "Producto diferencial",
    description: "Alto contenido proteico y fibra. Pocas empresas en el país.",
  },
  {
    icon: Globe,
    title: "Impacto positivo",
    description: "Revolución alimentaria con potencial de exportación.",
  },
]

export function Distribuidores() {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
              Oportunidad de negocio
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oportunidad para distribuidores
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Sumate a la revolución del cáñamo en Argentina
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#contacto">
                Contactanos para sumarte
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
