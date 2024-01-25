"use client"
// import Cart from '@/components/Cart'
import Header from '@/components/Header'
import HeaderBlob from '@/components/HeaderBlob'
import NavButton from '@/components/NavButton'
import NewArrival from '@/components/NewArrival'
import ProductList from '@/components/ProductList'
import SideCart from '@/components/SideCart'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const toggleSideCart = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openProducts, setOpenProducts] = useState(true)


  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderBlob openProducts={openProducts} setOpenProducts={setOpenProducts} />
      <SideCart isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='flex items-center justify-center space-x-3 p-3 mb-4'>
        <p onClick={() => setOpenProducts(false)} className={`cursor-pointer text-xl font-medium ${!openProducts ? "opacity-80 " : "opacity-30"}`}>New Arrival </p>
        <p onClick={() => setOpenProducts(true)} className={`cursor-pointer text-xl font-medium ${openProducts ? "opacity-80 " : "opacity-30 "}`}> Current Collections  </p>
      </div>
      {
        openProducts ? < ProductList /> : <NewArrival />
      }
      {/* <ProductList /> */}
    </>
  )

}
