import { Lightbulb, HeartPulse, Recycle } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Pioneros en llevar el cáñamo a la gastronomía argentina",
  },
  {
    icon: HeartPulse,
    title: "Salud",
    description: "Comprometidos con tu bienestar nutricional",
  },
  {
    icon: Recycle,
    title: "Sustentabilidad",
    description: "Procesos responsables con el medio ambiente",
  },
]

export function SomosCanapa() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://i.postimg.cc/Mp5pYkDC/Gemini-Generated-Image-dxjd7bdxjd7bdxjd.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-8">
            Somos Canapa
          </h2>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Fuimos el <strong className="text-primary">primer restaurante en Argentina</strong> en incorporar harina
              de cáñamo a su carta, comenzando con pizzas y fideos enriquecidos.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nuestra misión es llevar sus beneficios a más personas y
              <strong className="text-primary"> fomentar una industria sustentable</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
