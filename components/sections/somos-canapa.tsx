"use client"

import { Lightbulb, HeartPulse, Recycle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Pioneros en la integración del cáñamo en la gastronomía argentina.",
    color: "primary",
  },
  {
    icon: HeartPulse,
    title: "Salud y Bienestar",
    description: "Comprometidos con el desarrollo de alimentos funcionales que nutren de verdad.",
    color: "secondary",
  },
  {
    icon: Recycle,
    title: "Sustentabilidad",
    description: "Impulsamos una industria responsable con el medio ambiente y la sociedad.",
    color: "accent",
  },
]

export function SomosCanapa() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <Image
          src="https://i.postimg.cc/Mp5pYkDC/Gemini-Generated-Image-dxjd7bdxjd7bdxjd.png"
          alt="Fondo decorativo de cáñamo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Canapa Alimentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Nuestro propósito es divulgar el uso de esta superplanta y su superalimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border/50"
              >
                <div className={`w-14 h-14 rounded-xl bg-${value.color}/10 flex items-center justify-center mb-5`}>
                  <value.icon className={`w-7 h-7 text-${value.color}`} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-green-100 to-green-50/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-border/50 max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Somos los <strong className="text-primary">primeros en realizar alimentos con cáñamo</strong> en Argentina. Fuimos pioneros con nuestro restaurante, donde incorporamos la harina de cáñamo en pizzas y panificados. Nuestro proposito es divulgar los beneficios de esta superplanta/superalimento y <strong className="text-primary">fomentar una industria local y sustentable</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
