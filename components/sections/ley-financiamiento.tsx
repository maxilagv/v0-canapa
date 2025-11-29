import { Scale, CheckCircle } from "lucide-react"

export function LeyFinanciamiento() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 bg-muted rounded-2xl border border-border/50">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Scale className="w-10 h-10 text-primary" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ley de financiamiento del cáñamo
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                En 2022 Argentina aprobó el marco legal para la industria del cannabis medicinal y del cáñamo industrial
                (Ley 27.669), que promueve la investigación, la producción y el acceso a financiamiento para
                emprendimientos innovadores.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Marco legal que facilita la inversión y el desarrollo de productos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
