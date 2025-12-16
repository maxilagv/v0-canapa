"use client"

import Image from "next/image"
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const socialLinks = [
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
]

export function Footer() {
  return (
    <>
      <section className="bg-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                ¿Listo para probar?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
                Descubrí una nueva forma de nutrirte.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg py-7 px-10 rounded-full transition-all">
                Ver productos
            </Button>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://i.postimg.cc/Kj3bXwBH/Whats-App-Image-2025-11-27-at-14-24-51.jpg"
                  alt="Logo Canapa"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-heading font-bold text-xl">Canapa</span>
              </div>
              <p className="text-background/70 text-sm">
                Pioneros en la revolución alimenticia del cáñamo en Argentina.
              </p>
            </div>
            
            <div className="md:col-span-2">
                <h3 className="font-bold font-heading text-lg mb-4">Suscribite a nuestro newsletter</h3>
                <form className="flex gap-2">
                    <Input id="newsletter-email" label="Tu email" type="email" className="bg-transparent text-white border-white/30" />
                    <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 flex-shrink-0">
                        <ArrowRight size={20} />
                    </Button>
                </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center sm:text-left">
                &copy; {new Date().getFullYear()} Canapa. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
                {socialLinks.map((link) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    className="text-background/70 hover:text-primary transition-colors"
                    whileHover={{ y: -2, scale: 1.1 }}
                >
                    <link.icon className="w-6 h-6" />
                </motion.a>
                ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
