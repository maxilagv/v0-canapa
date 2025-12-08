"use client"

import { Leaf, History } from "lucide-react"
import { motion } from "framer-motion"

export function QueEsCanamo() {
  return (
    <section id="que-es" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <Leaf className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground">
              ¿Qué es el cáñamo?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-foreground/80 leading-relaxed"
          >
            <p>
              El cáñamo es una variedad de <em>Cannabis sativa</em> con niveles casi nulos de THC:
              <strong> no produce efectos psicoactivos</strong> y es totalmente seguro para consumo alimentario.
            </p>
            <p>
              De sus semillas obtenemos la <strong>harina de cáñamo</strong>, base nutritiva de todos nuestros
              productos.
            </p>
          </motion.div>

          {/* Historical Note con animación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="mt-12 p-6 md:p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 hover:border-accent/40 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: -15 }}
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1"
              >
                <History className="w-5 h-5 text-accent" />
              </motion.div>
              <div>
                <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-3 text-foreground">
                  Apunte histórico
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Usado hace siglos para textiles y alimentos, hoy volvemos a descubrir sus beneficios nutricionales.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
