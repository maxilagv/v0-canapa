"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ContactModal } from "../contact-modal"

export function Contacto() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contacto" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sumate a la Revolución del Cáñamo
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Dejanos tu contacto para ser distribuidor o para enterarte de nuestros lanzamientos, recetas y consejos.
              </p>
            </motion.div>

            <div className="text-center">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-7 px-10 rounded-full transition-all"
                >
                    Contactanos
                </Button>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
