"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

interface SabiasQueCardProps {
    fact: string;
    index: number;
}

export function SabiasQueCard({ fact, index }: SabiasQueCardProps) {
    const cardVariants = {
        offscreen: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
            },
        },
    };

    const colors = [
        { from: 'from-green-100', to: 'to-emerald-100', border: 'border-green-200', hover: 'hover:bg-green-neon/20' },
        { from: 'from-yellow-100', to: 'to-amber-100', border: 'border-yellow-200', hover: 'hover:bg-yellow-300/20' },
        { from: 'from-blue-100', to: 'to-cyan-100', border: 'border-blue-200', hover: 'hover:bg-cyan-300/20' },
        { from: 'from-purple-100', to: 'to-fuchsia-100', border: 'border-purple-200', hover: 'hover:bg-fuchsia-300/20' },
    ];
    const color = colors[index % 4];

    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`group rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-2xl overflow-hidden
              bg-gradient-to-br ${color.from} ${color.to} ${color.border} ${color.hover}
            `}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex-shrink-0 mb-4">
                    <motion.div whileHover={{ rotate: 15 }}>
                        <Lightbulb className="h-8 w-8 text-primary" />
                    </motion.div>
                </div>
                <div className="flex-grow">
                    <p className="text-foreground/90 text-lg leading-relaxed">
                        {fact}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
