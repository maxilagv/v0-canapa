"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "¿Los productos de Canapa tienen efectos psicoactivos?",
    answer:
      "No, en absoluto. Utilizamos cáñamo industrial, una variedad de Cannabis sativa que contiene niveles de THC (el compuesto psicoactivo) prácticamente nulos (menores al 1%). Nuestros productos son completamente seguros, legales y no generan ningún tipo de efecto psicoactivo.",
  },
  {
    question: "¿Son aptos para celíacos?",
    answer:
      "La harina de cáñamo es naturalmente libre de gluten. Sin embargo, nuestros productos como las pastas y pizzas se elaboran con sémola de trigo. Estamos desarrollando una línea de productos 100% sin TACC en el futuro.",
  },
  {
    question: "¿Son solo para veganos o deportistas?",
    answer:
      "¡Para nada! Los productos Canapa están diseñados para cualquier persona que busque mejorar su nutrición diaria de forma fácil y deliciosa. Son un complemento ideal para dietas veganas y para deportistas por su alto valor proteico, pero sus beneficios son para todos.",
  },
  {
    question: "¿Qué sabor tienen los productos?",
    answer:
      "La harina de cáñamo tiene un sabor suave y agradable, con notas que recuerdan a la nuez o a la semilla de girasol. En nuestros productos, este sabor se integra perfectamente, enriqueciendo el perfil de tus platos sin opacar el sabor original.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Despejamos las dudas más comunes sobre el cáñamo y nuestros productos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl shadow-sm transition-shadow hover:shadow-md"
                >
                  <AccordionTrigger className="font-heading font-semibold text-lg text-left text-foreground px-6 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 px-6 pb-5 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
