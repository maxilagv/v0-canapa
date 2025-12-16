"use client"

import { motion } from "framer-motion"
import { Timeline } from "../timeline"

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

        <Timeline />
      </div>
    </section>
  )
}
