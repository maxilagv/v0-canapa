import { Dumbbell, Salad, Brain, Activity, Scale, Heart } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "Proteína completa y digestiva",
    description: "Todos los aminoácidos esenciales en forma vegetal. Ideal para deportistas y veganos.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Salad,
    title: "Salud digestiva",
    description: "La fibra mejora la regularidad intestinal y alimenta la microbiota.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: Brain,
    title: "Grasas amigas del cerebro",
    description: "Omega 3 y 6 que apoyan la función cognitiva y el equilibrio emocional.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Activity,
    title: "Regulación de la glucosa",
    description: "Proteínas y fibra que liberan energía de forma gradual y estable.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Scale,
    title: "Saciedad y control de peso",
    description: "Sensación de llenura duradera que ayuda a controlar la ingesta calórica.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: Heart,
    title: "Corazón saludable",
    description: "Grasas insaturadas y fibra que mantienen el colesterol en niveles saludables.",
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
            Cáñamo y chía: nutrición que transforma tu día a día
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
