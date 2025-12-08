"use client"

import { Sprout, Leaf, Wheat, ChefHat } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Sprout,
    title: "Cultivo Responsable",
    description: "Cáñamo industrial cultivado de forma legal y sostenible.",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Cosecha y Selección",
    description: "Selección manual de las mejores semillas para garantizar su valor nutricional.",
    color: "secondary",
  },
  {
    icon: Wheat,
    title: "Molienda Artesanal",
    description: "Molido en frío de las semillas para convertirlas en una harina nutritiva.",
    color: "accent",
  },
  {
    icon: ChefHat,
    title: "Elaboración Culinaria",
    description: "Uso de la harina para crear pizzas y pastas deliciosas y funcionales.",
    color: "primary",
  },
]

export function Proceso() {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Del Campo a tu Plato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Un viaje de transparencia y calidad que podés saborear en cada bocado.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Connector */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-border" aria-hidden="true" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="flex justify-center"
                >
                  <div className="relative z-10 w-24 h-24 rounded-full bg-card border-4 border-border flex items-center justify-center shadow-lg mb-6">
                    <div className={`w-16 h-16 bg-${step.color}/10 rounded-full flex items-center justify-center`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                  </div>
                </motion.div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
