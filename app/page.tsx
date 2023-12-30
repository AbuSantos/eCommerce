"use client"
import Cart from '@/components/Cart'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  const [viewCart, setViewCart] = useState<boolean>(false)
  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
    </>
  )

  return content
}
