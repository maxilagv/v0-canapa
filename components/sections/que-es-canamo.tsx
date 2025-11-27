import { Leaf, History } from "lucide-react"

export function QueEsCanamo() {
  return (
    <section id="que-es" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground">
              ¿Qué es el cáñamo?
            </h2>
          </div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              El cáñamo es una subespecie de <em>Cannabis sativa</em> cultivada desde hace siglos para fabricar
              textiles, aceites y alimentos. A diferencia de la marihuana, contiene niveles casi nulos de THC, por lo
              que <strong>no produce efectos psicoactivos</strong> y su consumo es totalmente seguro dentro de una dieta
              equilibrada.
            </p>

            <p>
              En Canapa usamos cáñamo industrial de producción controlada, respetando las normas vigentes. De sus
              semillas obtenemos la <strong>harina de cáñamo</strong>, base de nuestros productos.
            </p>
          </div>

          {/* Historical Note */}
          <div className="mt-12 p-6 md:p-8 bg-muted rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                <History className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] font-semibold text-xl mb-3 text-foreground">
                  Apunte histórico
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Desde el Antiguo Egipto hasta hoy, el cáñamo ha acompañado a distintas culturas. Con la
                  industrialización se relegó su uso alimentario, pero hoy redescubrimos sus propiedades nutricionales y
                  su capacidad para enriquecer preparaciones clásicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
