import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartProvider'
import { ProductProvider } from '@/context/InventoryProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'buyMe',
  description: 'Get your favourite outfits here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CartProvider>
        <ProductProvider>
          <body className={inter.className}>

            {children}
            {/* <Footer /> */}
          </body>
        </ProductProvider>
      </CartProvider>
    </html>
  )
}
