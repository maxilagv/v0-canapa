"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Leaf, Heart, Info, Phone, Store, Home, Instagram, Facebook, MessageCircle } from "lucide-react" // Added Store, Instagram, Facebook, WhatsappIcon
import Link from "next/link"

interface DrawerMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const navItems = [
  { href: "/", icon: Home, label: "Inicio" },
  { href: "/#que-es-canamo", icon: Leaf, label: "¿Qué es el Cáñamo?" },
  { href: "/#beneficios", icon: Heart, label: "Beneficios" },
  { href: "/#distribuidores", icon: Store, label: "Distribuidores" }, // Added Distribuidores
  { href: "/#proceso", icon: Info, label: "Nuestro Proceso" },
]

export function DrawerMenu({ isOpen, setIsOpen }: DrawerMenuProps) {
  const closeMenu = () => setIsOpen(false)

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: { type: "spring", stiffness: 250, damping: 30, ease: "easeOut", duration: 0.3 },
    },
    exit: {
      x: "100%",
      transition: { type: "easeIn", duration: 0.2 },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl z-50 flex flex-col font-sans"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-modal="true"
            role="dialog"
          >
            {/* Header */}
            <header className="flex justify-between items-center p-6 border-b border-gray-200/80">
              <h2 className="font-heading text-xl font-bold text-gray-900">Menú</h2>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-200/70 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </header>

            {/* Body (Navigation) */}
            <nav className="flex-grow p-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 ease-out hover:bg-green-50/80 hover:translate-x-2 focus:outline-none focus:bg-green-50/80"
                    >
                      <item.icon
                        className="text-gray-500 group-hover:text-teal-600 transition-colors"
                        size={22}
                        strokeWidth={1.5}
                      />
                      <span className="text-lg font-medium text-gray-800 group-hover:text-teal-700 transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <footer className="p-6 mt-auto border-t border-gray-200/80 space-y-6">
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label="WhatsApp">
                  <MessageCircle size={24} />
                </a>
              </div>
            </footer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
