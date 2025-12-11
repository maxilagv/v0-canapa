"use client"

import { Scale, CheckCircle, Award } from "lucide-react"
import { motion } from "framer-motion"

export function LeyFinanciamiento() {
  return (
    <section className="py-20 md:py-28 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-green-100 to-green-50 p-8 md:p-12 rounded-2xl shadow-lg border border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Award className="w-12 h-12 text-primary" />
              </motion.div>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Un Marco Legal para Crecer
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto md:mx-0 mb-6"></div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                En 2022, Argentina aprobó la Ley 27.669, creando el marco regulatorio para la industria del cannabis medicinal y el cáñamo industrial. Esta ley fomenta la investigación, la producción y el acceso a financiamiento para emprendimientos innovadores como Canapa.
              </p>
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Un sector con respaldo legal y potencial de exportación.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
