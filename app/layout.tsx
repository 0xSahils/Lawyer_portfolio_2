import React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"

import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Advocate Rajesh Mishra | Senior Lawyer, Delhi",
  description:
    "Advocate Rajesh Mishra - Senior practicing lawyer in Delhi with 25+ years of experience in Civil, Criminal, Family, Property, and Corporate Law. Expert legal counsel at Delhi High Court and Supreme Court of India.",
  keywords: [
    "Rajesh Mishra",
    "Delhi Lawyer",
    "Advocate",
    "High Court",
    "Supreme Court",
    "Legal Services",
    "Civil Law",
    "Criminal Law",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0f1623",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
