"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { ContactForm } from "@/components/contact-form"

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
                            <X size={24} />
                        </button>
                        <h2 className="text-3xl font-bold font-heading text-white mb-6">Contacto</h2>
                        <ContactForm />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
