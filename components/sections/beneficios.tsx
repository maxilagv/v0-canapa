"use client"

import { Dumbbell, Salad, Brain, Activity, Scale, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "../animated-counter"

const benefits = [
  {
    icon: Dumbbell,
    title: "Proteína Completa",
    description: "Ideal para deportistas y veganos, contiene todos los aminoácidos esenciales.",
    color: "primary",
  },
  {
    icon: Salad,
    title: "Salud Digestiva",
    description: "Su alto contenido de fibra mejora la regularidad intestinal y alimenta tu microbiota.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Función Cognitiva",
    description: "Los ácidos grasos Omega 3 y 6 apoyan la concentración y el equilibrio emocional.",
    color: "accent",
  },
  {
    icon: Activity,
    title: "Energía Sostenida",
    description: "Proteínas y fibra que liberan energía de forma gradual, evitando picos de glucosa.",
    color: "primary",
  },
  {
    icon: Scale,
    title: "Control de Peso",
    description: "Genera una sensación de saciedad duradera que ayuda a controlar la ingesta calórica.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Corazón Saludable",
    description: "Las grasas insaturadas y la fibra ayudan a mantener el colesterol en niveles óptimos.",
    color: "accent",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Beneficios() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beneficios para tu Cuerpo y Mente
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            El cáñamo es una fuente de nutrición que impulsa tu bienestar desde adentro hacia afuera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 text-center">
          <motion.div variants={cardVariants} className="p-6 bg-card rounded-xl">
            <h3 className="text-5xl font-bold text-primary">
              <AnimatedCounter from={0} to={9} />
            </h3>
            <p className="mt-2 text-lg font-semibold text-foreground">Aminoácidos Esenciales</p>
          </motion.div>
          <motion.div variants={cardVariants} className="p-6 bg-card rounded-xl">
            <h3 className="text-5xl font-bold text-primary">
              <AnimatedCounter from={0} to={100} suffix="%" />
            </h3>
            <p className="mt-2 text-lg font-semibold text-foreground">Proteínas Completas</p>
          </motion.div>
          <motion.div variants={cardVariants} className="p-6 bg-card rounded-xl">
            <h3 className="text-5xl font-bold text-primary">
                1:3
            </h3>
            <p className="mt-2 text-lg font-semibold text-foreground">Ratio Omega 3:6</p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className={`w-7 h-7 text-${benefit.color}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {benefit.title}
                  </h3>
                </div>
              </div>
              <p className="text-foreground/70 mt-4">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
