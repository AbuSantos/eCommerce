"use client"
import { useState } from "react"
import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { InventoryType } from "@/data/inventory"
import useCart from "@/hooks/useCart"
import { getSizeName } from "@/utils/util"

// import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

interface PropsType {
    product: InventoryType | undefined
}

export function ProductInfo({ product }: PropsType) {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { name, description, price, sizes } = product
    const [selectSize, setSelectedSize] = useState<string | undefined>(product?.sizes[0])
    // const { addItem, incrementItem, cartDetails } = useShoppingCart()
    // const isInCart = !!cartDetails?.[product._id]
    // const { toast } = useToast()

    const addToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })


    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight">{name}</h1>

            <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                {/* <p className="text-3xl tracking-tight">{formatCurrencyString({ currency: "USD", value: price })}</p> */}
            </div>

            <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base">{description}</div>
            </div>

            <div className="mt-4">
                <p>
                    Size: <strong>{getSizeName(selectSize)}</strong>
                </p>
                {sizes.map((size: string | undefined) => (
                    <button
                        onClick={() => setSelectedSize(size)}
                        // variant={selectSize === size ? "default" : "outline"}
                        key={size} className="mr-2 mt-4">
                        {getSizeName(size)}
                    </button>
                ))}
            </div>

            <form className="mt-6">
                <div className="mt-4 flex">
                    <button
                        onClick={addToCart}
                        type="button"
                        className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        Add to cart
                    </button>
                </div>
            </form>
        </div>
    )
}
