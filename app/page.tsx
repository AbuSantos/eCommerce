"use client"
import Cart from '@/components/Cart'
import Header from '@/components/Header'
import NavButton from '@/components/NavButton'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {

  const [viewCart, setViewCart] = useState<boolean>(false)
  const pageContent = viewCart ? <Cart /> : <ProductList />

  const Content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
    </>
  )

  return Content
}
