"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Proteínas completas",
    description: "Los nueve aminoácidos esenciales",
  },
  {
    title: "Fibra dietética",
    description: "Mejora digestión y saciedad",
  },
  {
    title: "Omega 3 y 6",
    description: "Proporción 1:3 ideal",
  },
  {
    title: "Vitaminas y minerales",
    description: "Hierro, magnesio, zinc, calcio",
  },
]

export function Superalimento() {
  return (
    <section id="superalimento" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground text-center">
            Superalimento: cáñamo
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Pregunta central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-lg">
              <h3 className="font-[var(--font-heading)] text-xl md:text-2xl font-bold">
                ¿Por qué es un superalimento?
              </h3>
            </div>
          </motion.div>

          {/* Líneas de conexión SVG */}
          <div className="relative">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 800 300"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Líneas desde el centro hacia los nodos */}
              <motion.path
                d="M400,20 L150,120"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary/40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.path
                d="M400,20 L350,120"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-secondary/40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.path
                d="M400,20 L450,120"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-accent/40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.path
                d="M400,20 L650,120"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary/40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </svg>

            {/* Nodos de beneficios en grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 relative z-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`
                    relative p-5 rounded-2xl shadow-md border-2 transition-all duration-300 cursor-default
                    ${index === 0 ? "bg-primary/10 border-primary/30 hover:border-primary/60 hover:shadow-primary/20" : ""}
                    ${index === 1 ? "bg-secondary/10 border-secondary/30 hover:border-secondary/60 hover:shadow-secondary/20" : ""}
                    ${index === 2 ? "bg-accent/10 border-accent/30 hover:border-accent/60 hover:shadow-accent/20" : ""}
                    ${index === 3 ? "bg-primary/10 border-primary/30 hover:border-primary/60 hover:shadow-primary/20" : ""}
                  `}
                >
                  {/* Punto de conexión */}
                  <div
                    className={`
                    absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-background
                    ${index === 0 ? "border-primary" : ""}
                    ${index === 1 ? "border-secondary" : ""}
                    ${index === 2 ? "border-accent" : ""}
                    ${index === 3 ? "border-primary" : ""}
                  `}
                  />

                  <h4 className="font-[var(--font-heading)] font-bold text-foreground text-center mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-foreground/70 text-sm text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-lg text-foreground/80 font-medium text-center"
          >
            Pastas que funcionan como <strong className="text-primary">suplemento dietario natural</strong>.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
