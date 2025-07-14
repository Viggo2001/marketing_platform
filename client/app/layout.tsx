import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InfluencerHub - Find the Perfect Social Media Influencers",
  description:
    "Connect with top social media influencers across all platforms. Filter by niche, audience size, engagement rate, and more to find the perfect match for your brand.",
  keywords:
    "influencer marketing, social media influencers, brand partnerships, Instagram influencers, YouTube creators",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
