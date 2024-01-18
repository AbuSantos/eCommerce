"use client"
import CategoryProduct from '@/components/CategoryProduct'
import Header from '@/components/Header'
import { ProductGallery } from '@/components/Item-Card'
import { ProductInfo } from '@/components/Product-Info'
import SideCart from '@/components/SideCart'
import { CartItemType } from '@/context/CartProvider'
import { InventoryType, inventory } from '@/data/inventory'
import React, { useState } from 'react'
type PropsType = {
    params: string
}
const ProductItem = ({ params }: PropsType) => {
    const product: InventoryType | undefined = inventory.find(item => item.id === params.id)
    //we get the categories of the selected items 
    const categories: string[] = product?.categories || []
    // then we filter the inventory by the selected category, then we ensure the selected product isnt included in the array
    const categoryProducts: InventoryType[] = inventory.filter(item => item.categories.includes(categories[0]) && product?.id !== item.id)

    // console.log(categories);
    // console.log(categoryProducts);

    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (

        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
                <SideCart isOpen={isOpen} setIsOpen={setIsOpen} />

                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* Product */}
                    <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
                        {/* Product gallery */}
                        <ProductGallery product={product} />
                        {/* Product info */}
                        <ProductInfo product={product} />
                    </div>
                </div>

                <div className='overflow-hidden'>
                    <h2 className='p-4 text-center capitalize text-xl'>Related products</h2>
                    <CategoryProduct categoryProducts={categoryProducts} />
                </div>
            </main>
        </>
    )
}

export default ProductItem