import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="https://i.postimg.cc/Kj3bXwBH/Whats-App-Image-2025-11-27-at-14-24-51.jpg"
              alt="Logo Canapa"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-[var(--font-heading)] font-bold text-xl">Canapa</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-background/70 text-sm">Pioneros en harina de cáñamo en Argentina</p>
            <p className="text-background/50 text-xs mt-1">
              © {new Date().getFullYear()} Canapa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
