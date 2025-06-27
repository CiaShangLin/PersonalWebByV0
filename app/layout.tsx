import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Android Engineer | 個人履歷",
  description: "專業Android工程師的個人履歷網站，展示開發經驗、技術文章和專案作品",
  keywords: ["Android", "Engineer", "Developer", "Mobile", "Kotlin", "Java"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://yourusername.github.io",
    title: "Android Engineer | 個人履歷",
    description: "專業Android工程師的個人履歷網站",
    siteName: "Android Engineer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Android Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Engineer | 個人履歷",
    description: "專業Android工程師的個人履歷網站",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <div className="min-h-screen bg-white text-gray-900">
            <Navigation />
            <main className="transition-all duration-300 ease-in-out">{children}</main>
          </div>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
