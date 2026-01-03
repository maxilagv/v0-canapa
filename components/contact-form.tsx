"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Confetti from "react-confetti"

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export function ContactForm() {
    const [showConfetti, setShowConfetti] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setShowConfetti(true)
    }

    return (
        <>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <Input
                        id="name"
                        label="Nombre"
                        {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                </div>
                <div>
                    <Textarea
                        id="message"
                        label="Mensaje"
                        {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg">
                    Enviar
                </Button>
            </form>
        </>
    )
}
