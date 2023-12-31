"use client"
import Header from '@/components/Header'
import { ProductGallery } from '@/components/Item-Card'
import { ProductInfo } from '@/components/Product-Info'
import { CartItemType } from '@/context/CartProvider'
import { InventoryType, inventory } from '@/data/inventory'
import React, { useState } from 'react'
type PropsType = {
    params: string
}
const ProductItem = ({ params }: PropsType) => {
    const product: InventoryType | undefined = inventory.find(item => item.id === params.id)
    const [viewCart, setViewCart] = useState<boolean>(false)



    return (

        <>
            <Header viewCart={viewCart} setViewCart={setViewCart} />
            <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">

                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* Product */}
                    <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
                        {/* Product gallery */}
                        <ProductGallery product={product} />
                        {/* Product info */}
                        <ProductInfo product={product} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductItem