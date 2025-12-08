"use client"

import { Dumbbell, Salad, Brain, Activity, Scale, Heart } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Dumbbell,
    title: "Proteína completa y digestiva",
    description: "Todos los aminoácidos esenciales en forma vegetal. Ideal para deportistas y veganos.",
    colorClass: "from-primary/20 to-primary/5 border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 text-primary",
  },
  {
    icon: Salad,
    title: "Salud digestiva",
    description: "La fibra mejora la regularidad intestinal y alimenta la microbiota.",
    colorClass: "from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary",
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    icon: Brain,
    title: "Grasas amigas del cerebro",
    description: "Omega 3 y 6 que apoyan la función cognitiva y el equilibrio emocional.",
    colorClass: "from-accent/20 to-accent/5 border-accent/30 hover:border-accent",
    iconBg: "bg-accent/20 text-accent",
  },
  {
    icon: Activity,
    title: "Regulación de la glucosa",
    description: "Proteínas y fibra que liberan energía de forma gradual y estable.",
    colorClass: "from-primary/20 to-primary/5 border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 text-primary",
  },
  {
    icon: Scale,
    title: "Saciedad y control de peso",
    description: "Sensación de llenura duradera que ayuda a controlar la ingesta calórica.",
    colorClass: "from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary",
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    icon: Heart,
    title: "Corazón saludable",
    description: "Grasas insaturadas y fibra que mantienen el colesterol en niveles saludables.",
    colorClass: "from-accent/20 to-accent/5 border-accent/30 hover:border-accent",
    iconBg: "bg-accent/20 text-accent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Beneficios() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios para tu cuerpo
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Cáñamo: nutrición que transforma tu día a día</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`
                group p-6 rounded-2xl border-2 transition-all duration-300 cursor-default
                bg-gradient-to-br ${benefit.colorClass}
                hover:shadow-xl
              `}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 rounded-xl ${benefit.iconBg} flex items-center justify-center mb-4`}
              >
                <benefit.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
