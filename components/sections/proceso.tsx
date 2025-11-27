import { Sprout, Leaf, Wheat, ChefHat } from "lucide-react"

const steps = [
  {
    icon: Sprout,
    title: "Cultivo de cáñamo industrial",
    description: "Cultivo responsable y legal, siguiendo las normativas vigentes.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Leaf,
    title: "Cosecha y selección de semillas",
    description: "Control de calidad riguroso para garantizar su valor nutricional.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Wheat,
    title: "Molienda y mezcla",
    description: "Molido fino de las semillas de cáñamo y chía para convertirlas en harina nutritiva.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: ChefHat,
    title: "Elaboración de alimentos",
    description: "Uso de la harina para crear pizzas, pastas y otros productos deliciosos.",
    color: "bg-primary text-primary-foreground",
  },
]

export function Proceso() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Del campo al plato
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Conocé el proceso detrás de nuestros productos</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg mb-6`}
                  >
                    <step.icon className="w-9 h-9" />
                  </div>

                  {/* Content */}
                  <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
