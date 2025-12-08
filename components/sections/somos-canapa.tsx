"use client"

import { Lightbulb, HeartPulse, Recycle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Pioneros en llevar el cáñamo a la gastronomía argentina",
    colorClass: "from-primary/15 to-primary/5 border-primary/20 hover:border-primary/50",
    iconBg: "bg-primary/20 text-primary",
  },
  {
    icon: HeartPulse,
    title: "Salud",
    description: "Comprometidos con tu bienestar nutricional",
    colorClass: "from-secondary/15 to-secondary/5 border-secondary/20 hover:border-secondary/50",
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    icon: Recycle,
    title: "Sustentabilidad",
    description: "Procesos responsables con el medio ambiente",
    colorClass: "from-accent/15 to-accent/5 border-accent/20 hover:border-accent/50",
    iconBg: "bg-accent/20 text-accent",
  },
]

export function SomosCanapa() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://i.postimg.cc/Mp5pYkDC/Gemini-Generated-Image-dxjd7bdxjd7bdxjd.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-8"
          >
            Somos Canapa
          </motion.h2>

          {/* Values con animaciones y colores */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`
                  p-6 rounded-xl border-2 transition-all duration-300 cursor-default
                  bg-gradient-to-br ${value.colorClass}
                  hover:shadow-lg
                `}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-full ${value.iconBg} flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg mt-12"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Fuimos el <strong className="text-primary">primer restaurante en Argentina</strong> en incorporar harina
              de cáñamo a su carta, comenzando con pizzas y fideos enriquecidos.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nuestra misión es llevar sus beneficios a más personas y
              <strong className="text-primary"> fomentar una industria sustentable</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
