"use client"

import { Sparkles, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Proteínas completas",
    description: "Contiene los nueve aminoácidos esenciales para tu cuerpo.",
    icon: CheckCircle,
  },
  {
    title: "Fibra dietética",
    description: "Favorece la digestión y aumenta la sensación de saciedad.",
    icon: CheckCircle,
  },
  {
    title: "Omega 3 y 6",
    description: "En la proporción ideal (1:3) para la salud cardiovascular.",
    icon: CheckCircle,
  },
  {
    title: "Vitaminas y Minerales",
    description: "Rico en Hierro, Magnesio, Zinc y Calcio.",
    icon: CheckCircle,
  },
]

export function Superalimento() {
  return (
    <section id="superalimento" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Un Verdadero Superalimento
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            La harina de cáñamo no es solo un ingrediente, es una fuente de poder nutricional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border/50 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
