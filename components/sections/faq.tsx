import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿El cáñamo es droga?",
    answer:
      "No. El cáñamo industrial tiene niveles muy bajos de THC, por lo que no produce efectos psicoactivos. Es un alimento completamente seguro y legal.",
  },
  {
    question: "¿Contienen gluten?",
    answer:
      "Nuestros productos no contienen gluten, salvo indicación en la etiqueta. La harina de cáñamo y la chía son naturalmente libres de gluten.",
  },
  {
    question: "¿Son solo para veganos o deportistas?",
    answer:
      "No. Están pensados para cualquiera que quiera mejorar su nutrición diaria sin renunciar a sus platos preferidos.",
  },
  {
    question: "¿Reemplazan a todas las harinas?",
    answer:
      "No. Se recomienda combinarlas con otras harinas o ingredientes para lograr la textura y sabor deseados en diferentes preparaciones.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-foreground/70">Despejamos tus dudas sobre el cáñamo y nuestros productos</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="font-[var(--font-heading)] font-medium text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
