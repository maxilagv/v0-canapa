"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DrawerMenu } from "@/components/drawer-menu"
import { motion } from "framer-motion"
import { NavLink } from "./nav-link"

const navLinks = [
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#superalimento", label: "Superalimento" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#nosotros", label: "Nosotros" },
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
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.a 
              href="#" 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://i.postimg.cc/Kj3bXwBH/Whats-App-Image-2025-11-27-at-14-24-51.jpg"
                alt="Logo Canapa"
                width={48}
                height={48}
                className={`rounded-full transition-all duration-300 ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}
              />
              <span
                className={`font-heading font-bold text-2xl transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Canapa
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isScrolled={isScrolled}
                />
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className={`transition-all ${isScrolled ? "text-foreground" : "text-white"}`} />
            </Button>
          </div>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-neon to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </header>

      {/* Render the Off-Canvas Drawer Menu */}
      <DrawerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  )
}
