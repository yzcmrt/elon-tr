import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elon TR - Kurumsal Danışmanlık',
  description: 'Kurumsal danışmanlık ve eğitim hizmetleri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 