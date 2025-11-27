import { Dumbbell, Salad, Brain, Activity, Scale, Heart } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "Proteína completa y digestiva",
    description:
      "Contiene todos los aminoácidos esenciales y se digiere fácilmente. Ideal para deportistas, veganos o cualquier persona que busque añadir proteína vegetal de calidad.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Salad,
    title: "Salud digestiva (fibra)",
    description:
      "La fibra de cáñamo y chía mejora la regularidad intestinal y alimenta la microbiota, ayudando a mantener un intestino sano.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: Brain,
    title: "Grasas amigas del cerebro",
    description:
      "Los ácidos grasos Omega 3 y 6 contribuyen a la función cognitiva, la memoria y el equilibrio emocional.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Activity,
    title: "Regulación de la glucosa",
    description:
      "La combinación de proteínas y fibra ayuda a liberar la energía de los alimentos de forma gradual, favoreciendo la estabilidad de la glucosa en sangre.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Scale,
    title: "Saciedad y control de peso",
    description:
      "El cáñamo y la chía promueven una sensación de llenura duradera, ayudando a controlar la ingesta calórica.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: Heart,
    title: "Corazón saludable",
    description:
      "El perfil de grasas insaturadas y la fibra contribuyen a mantener niveles saludables de colesterol y a reducir la inflamación.",
    color: "bg-accent/20 text-accent",
  },
]

export function Beneficios() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios para tu cuerpo
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubrí cómo el cáñamo y la chía pueden transformar tu alimentación diaria
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div
                className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
