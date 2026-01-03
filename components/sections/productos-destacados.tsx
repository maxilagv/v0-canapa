"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProductCard } from "../product-card"

const products = [
  {
    name: "Pasta de Cáñamo",
    image: "https://i.postimg.cc/7hqZ7sv7/Gemini-Generated-Image-7lrw4l7lrw4l7lrw.png",
    description: "Nuestra pasta artesanal, una fusión perfecta de sémola de trigo y harina de cáñamo.",
    bgColor: "bg-primary/10",
    alt: "Plato con pasta de cáñamo artesanal y hojas de cáñamo",
  },
  {
    name: "Aceite de Cáñamo",
    image: "https://i.postimg.cc/Vv7mtzBj/Gemini-Generated-Image-t2kchtt2kchtt2kc.png",
    description: "Aceite de semilla de cáñamo prensado en frío, rico en Omega 3 y 6.",
    bgColor: "bg-secondary/10",
    alt: "Botella de aceite de semilla de cáñamo prensado en frío",
  },
  {
    name: "Harina de Cáñamo",
    image: "https://i.postimg.cc/6QswnjnT/Gemini-Generated-Image-tn3doztn3doztn3d-(1).png",
    description: "Harina de alto valor proteico para enriquecer tus recetas diarias.",
    bgColor: "bg-accent/10",
    alt: "Tazón con harina de cáñamo y semillas de cáñamo",
  },
]

export function ProductosDestacados() {
  return (
    <section id="productos" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pastas Secas
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Descubrí el poder del cáñamo en tu alimentación con nuestra línea de productos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-24 mb-16"
        >
          <Image
            src="https://images.seeklogo.com/logo-png/43/1/sin-tacc-logo-png_seeklogo-436451.png"
            alt="Sin TACC Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Línea Sin TACC
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Próximamente...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
