"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react" // X is no longer needed here
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DrawerMenu } from "@/components/drawer-menu" // Import the new DrawerMenu

const navLinks = [
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#superalimento", label: "Superalimento" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${ // z-index adjusted to be below drawer
          isScrolled ? "bg-white/90 backdrop-blur-lg border-b" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="https://i.postimg.cc/Kj3bXwBH/Whats-App-Image-2025-11-27-at-14-24-51.jpg"
                alt="Logo Canapa"
                width={48}
                height={48}
                className={`rounded-full transition-all duration-300 ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}
              />
              <span
                className={`font-heading font-bold text-2xl transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Canapa
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors hover:text-teal-500 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)} // Set to true to open drawer
              aria-label="Abrir menú"
            >
              <Menu className={`transition-all ${isScrolled ? "text-gray-900" : "text-white"}`} />
            </Button>
          </div>
        </div>
      </header>

      {/* Render the Off-Canvas Drawer Menu */}
      <DrawerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  )
}
