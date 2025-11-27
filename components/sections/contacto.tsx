"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Querés ser parte de la revolución del cáñamo?
            </h2>
            <p className="text-lg text-foreground/70">
              Suscribite y sé el primero en enterarte de nuestros lanzamientos, recetas y consejos nutritivos.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-primary/10 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-2 text-foreground">
                ¡Gracias por suscribirte!
              </h3>
              <p className="text-foreground/70">Pronto recibirás nuestras novedades en tu correo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="bg-muted border-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-muted border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje <span className="text-muted-foreground">(opcional)</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="¿Tenés alguna consulta o comentario?"
                  rows={4}
                  className="bg-muted border-border focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Quiero enterarme de las novedades
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
