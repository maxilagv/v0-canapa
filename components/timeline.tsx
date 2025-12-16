"use client"

import { Sprout, Leaf, Wheat, ChefHat } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: Sprout,
    title: "Cultivo Responsable",
    description: "Cáñamo industrial cultivado de forma legal y sostenible.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Leaf,
    title: "Cosecha y Selección",
    description: "Selección manual de las mejores semillas para garantizar su valor nutricional.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Wheat,
    title: "Molienda Artesanal",
    description: "Molido en frío de las semillas para convertirlas en una harina nutritiva.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: ChefHat,
    title: "Elaboración Culinaria",
    description: "Uso de la harina para crear alimentos deliciosos y funcionales.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

const iconVariants = {
    hidden: { rotate: -90, scale: 0 },
    visible: {
        rotate: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 10,
            delay: 0.2
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.4
        },
    },
};


export function Timeline() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    return (
        <div ref={targetRef} className="relative max-w-5xl mx-auto py-12">
            <div className="hidden md:block absolute top-12 left-0 w-full h-1" aria-hidden="true">
                <svg width="100%" height="100%" viewBox="0 0 1000 2" preserveAspectRatio="none">
                    <path d="M 0 1 L 1000 1" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                    <motion.path
                        d="M 0 1 L 1000 1"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        fill="none"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid md:grid-cols-4 gap-8"
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={stepVariants}
                        className="relative text-center"
                    >
                        <motion.div
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="flex justify-center"
                        >
                            <div className="relative z-10 w-24 h-24 rounded-full bg-card border-4 border-border flex items-center justify-center shadow-lg mb-6">
                                <motion.div variants={iconVariants} className={`w-16 h-16 rounded-full flex items-center justify-center ${step.bgColor}`}>
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div variants={textVariants}>
                            <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                                {step.title}
                            </h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
