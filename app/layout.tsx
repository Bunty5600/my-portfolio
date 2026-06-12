import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bunty Bhainsa — Full-Stack Developer & AI Systems Engineer',
  description:
    'Portfolio of Bunty Bhainsa — Full-Stack Developer and AI Systems Engineer. I build scalable backends, intelligent pipelines, and interfaces people actually enjoy using.'
}

export const viewport = {
  themeColor: '#0a0a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LoadingScreen />
        <Navbar />
        <main className="min-h-[calc(100svh-4rem)]">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
