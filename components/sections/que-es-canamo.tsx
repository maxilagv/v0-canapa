"use client"

import { Leaf, History } from "lucide-react"
import { motion } from "framer-motion"

export function QueEsCanamo() {
  return (
    <section id="que-es" className="py-20 md:py-28 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Qué es el cáñamo?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-xl text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto"
          >
            <p className="mt-6">
              El cáñamo es una variedad de <em>Cannabis sativa</em> con niveles casi nulos de THC.
              <strong> No produce efectos psicoactivos</strong> y es totalmente seguro para el consumo alimentario.
            </p>
            <p>
              De sus semillas obtenemos la <strong>harina de cáñamo</strong>, la base nutritiva de todos nuestros
              productos.
            </p>
          </motion.div>

          {/* Historical Note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-br from-green-100 to-green-50 border-2 border-accent/20 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <History className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-2 text-foreground">
                  Un Legado Milenario
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Utilizado durante siglos para textiles, papel y alimentos, hoy redescubrimos los increíbles beneficios nutricionales del cáñamo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
