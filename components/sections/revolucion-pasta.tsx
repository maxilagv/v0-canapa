import { Check, ArrowRight } from "lucide-react"

const features = [
  "Hasta un 30% de proteína (más del doble que la pasta común)",
  "Alta dosis de fibra para mayor saciedad",
  "Perfil de grasas saludables (Omega 3 y 6)",
  "Ausencia de grasas trans",
  "Sin gluten (según receta final)",
]

const comparison = [
  { label: "Proteína", pasta: "12g", canapa: "30g" },
  { label: "Fibra", pasta: "3g", canapa: "12g" },
  { label: "Omega 3", pasta: "0g", canapa: "3g" },
]

export function RevolucionPasta() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revolución en tu plato de pasta
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Imaginá una pasta que no solo sea deliciosa, sino que además te aporte más nutrientes que la pasta
              tradicional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div className="bg-background p-8 rounded-2xl shadow-sm">
              <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-6 text-foreground">
                Nuestros fideos con harina de cáñamo y chía tienen:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground/80">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground/80 text-sm">
                  <strong className="text-primary">Para quienes no pueden consumir gluten</strong>, es una alternativa
                  segura cuando la receta final no incorpora trigo.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-background p-8 rounded-2xl shadow-sm">
              <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-6 text-foreground">
                Comparativa nutricional (por 100g)
              </h3>

              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-foreground">
                      <span>{item.label}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="text-xs text-muted-foreground mb-1">Pasta tradicional</div>
                        <div className="h-8 bg-muted rounded-lg flex items-center px-3">
                          <span className="text-foreground/70 font-medium">{item.pasta}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-xs text-primary font-medium mb-1">Pasta Canapa</div>
                        <div className="h-8 bg-primary/10 rounded-lg flex items-center px-3">
                          <span className="text-primary font-bold">{item.canapa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-primary font-medium">
                <span>Transformá un alimento cotidiano en una opción funcional</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
