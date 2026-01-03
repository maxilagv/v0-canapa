"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const phoneNumber = "5491149869141" // +54 9 11 4986-9141

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
    setMessage("") // Optional: Clear message after sending
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="font-bold">Chat con Canapa</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-3">
                ¡Hola! 👋 Escribinos tu mensaje y te responderemos por WhatsApp.
              </p>
              <Textarea
                id="whatsapp-message"
                label="Tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px] bg-white resize-none focus-visible:ring-[#25D366] text-slate-900 border-slate-200 pt-6"
                labelClassName="text-slate-500"
              />
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-gray-100">
              <Button 
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar mensaje
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 text-white transition-shadow"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </motion.button>
    </div>
  )
}
