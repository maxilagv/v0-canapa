import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="https://i.postimg.cc/Kj3bXwBH/Whats-App-Image-2025-11-27-at-14-24-51.jpg"
              alt="Logo Canapa"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-heading font-bold text-xl">Canapa</span>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-background/70 hover:text-primary transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Canapa. Todos los derechos reservados.</p>
          <p className="mt-1">Pioneros en la revolución alimenticia del cáñamo en Argentina.</p>
        </div>
      </div>
    </footer>
  )
}
