import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

// <CHANGE> Tipografías Canapa: Montserrat para títulos, Open Sans para cuerpo
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Canapa - Primeros en harina de cáñamo en Argentina",
  description:
    "Alimentos enriquecidos con cáñamo. Nutrición real en tus platos de siempre. Los primeros en elaborar alimentos con harina de cáñamo en Argentina.",
  generator: "v0.app",
  keywords: ["cáñamo", "superalimento", "pasta", "alimentos", "nutrición", "Argentina", "hemp"],
  openGraph: {
    title: "Canapa - Primeros en harina de cáñamo en Argentina",
    description: "Alimentos enriquecidos con cáñamo. Nutrición real en tus platos de siempre.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  )
}
