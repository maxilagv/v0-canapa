"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Leaf, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: TrendingUp,
    title: "Mercado Emergente",
    description: "Participá en un sector de alimentos saludables y funcionales en pleno crecimiento.",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Producto Diferencial",
    description: "Ofrecé un producto innovador, con alto contenido proteico y de fibra.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Impacto Positivo",
    description: "Sé parte de una revolución alimentaria con un enorme potencial de exportación.",
    color: "accent",
  },
]

export function Distribuidores() {
  return (
    <section id="distribuidores" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full text-sm mb-4">
            Oportunidad de Negocio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sé Distribuidor de Canapa
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Sumate a la revolución del cáñamo en Argentina y sé pionero en un mercado con un potencial enorme.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className={`w-14 h-14 rounded-xl bg-${reason.color}/20 flex items-center justify-center mb-5`}>
                <reason.icon className={`w-7 h-7 text-${reason.color}`} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-foreground/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-primary/40 transform hover:scale-105 transition-all"
          >
            <a href="#contacto">
              Contactanos para sumarte
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
