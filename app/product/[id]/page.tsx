"use client"
import CategoryProduct from '@/components/CategoryProduct'
import Header from '@/components/Header'
import { ProductGallery } from '@/components/Item-Card'
import { ProductInfo } from '@/components/Product-Info'
import SideCart from '@/components/SideCart'
import SizeGuide from '@/components/ui/SizeGuide'
import { CartItemType } from '@/context/CartProvider'
import { InventoryType, inventory } from '@/data/inventory'
import React, { useState } from 'react'
type PropsType = {
    params: InventoryType | undefined
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
            <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                <SideCart isOpen={isOpen} setIsOpen={setIsOpen} />

                <div className="mx-auto max-w-xl lg:max-w-none">
                    {/* Product */}
                    <div className="pb-20 lg:grid lg:grid-cols-3 lg:items-start gap-3 ">
                        {/* Product gallery */}
                        <ProductGallery product={product} />
                        {/* Product info */}
                        <ProductInfo product={product} />
                        <div>
                            <SizeGuide />
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <h2 className='p-4 text-center capitalize text-xl text-gray-800'>Related products</h2>
                    <CategoryProduct categoryProducts={categoryProducts} />
                </div>
            </main >
        </>
    )
}

export default ProductItem