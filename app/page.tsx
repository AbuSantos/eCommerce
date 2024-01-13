"use client"
import Cart from '@/components/Cart'
import Header from '@/components/Header'
import NavButton from '@/components/NavButton'
import ProductList from '@/components/ProductList'
import SideCart from '@/components/SideCart'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const toggleSideCart = () => {
    setIsOpen(!isOpen);
  };
  const [viewCart, setViewCart] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideCart isOpen={isOpen} setIsOpen={setIsOpen} />
      <ProductList />
    </>
  )

}
