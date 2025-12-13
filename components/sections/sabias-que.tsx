"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

const didYouKnowFacts = [
  {
    fact: "Antes del algodón masivo, el cáñamo era la fibra más usada en la ropa de trabajo europea.",
  },
  {
    fact: "El cáñamo fue central para la industria aeronáutica temprana, porque sus cuerdas no se pudrían con la humedad.",
  },
  {
    fact: "Durante siglos, entre el 70% y 90% de todo lo que usaban los barcos (velas, cuerdas, redes) era de cáñamo.",
  },
  {
    fact: "El primer automóvil de fibra biocompuesta (Ford, 1941) tenía paneles hechos con cáñamo, soja y otras fibras.",
  },
  {
    fact: "El cáñamo es entre 3 y 8 veces más resistente que el algodón.",
  },
  {
    fact: "Varias colonias estadounidenses exigían por ley sembrar cáñamo (Virginia, Massachusetts, Connecticut).",
  },
  {
    fact: "Los primeros jeans de Levi's (prototipo) fueron de un lienzo grueso de cáñamo usado para carpas y velas.",
  },
]

export function SabiasQue() {
  return (
    <section id="sabias-que" className="py-20 md:py-28 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Sabías que...?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Datos curiosos e históricos sobre el increíble mundo del cáñamo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {didYouKnowFacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl overflow-hidden
              ${
                index % 4 === 0
                  ? "bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200"
                  : index % 4 === 1
                  ? "bg-gradient-to-br from-yellow-100 to-amber-100 border border-yellow-200"
                  : index % 4 === 2
                  ? "bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200"
                  : "bg-gradient-to-br from-purple-100 to-fuchsia-100 border border-purple-200"
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-shrink-0 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}