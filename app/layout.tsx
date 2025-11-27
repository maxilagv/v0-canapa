import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
    "Pizzas y pastas enriquecidas con cáñamo y chía. Nutrición real en tus platos de siempre. El primer restaurante argentino en incorporar harina de cáñamo a su carta.",
  generator: "v0.app",
  keywords: ["cáñamo", "chía", "superalimento", "pasta", "pizza", "nutrición", "Argentina", "hemp"],
  openGraph: {
    title: "Canapa - Primeros en harina de cáñamo en Argentina",
    description: "Pizzas y pastas enriquecidas con cáñamo y chía. Nutrición real en tus platos de siempre.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
