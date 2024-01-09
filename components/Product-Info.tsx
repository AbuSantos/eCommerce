import { useState } from "react"
import Link from "next/link"
import { InventoryType, } from "@/data/inventory"
import useCart from "@/hooks/useCart"
import { formatCurrency, getSizeName } from "@/utils/util"
import { Button } from "./ui/Button"

// import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

interface PropsType {
    product: InventoryType | undefined
}

export function ProductInfo({ product }: PropsType) {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { name, description, price, sizes, colors } = product
    const [selectSize, setSelectedSize] = useState<string | undefined>(product?.sizes[0])
    const [selectColor, setSelectedColor] = useState<string | undefined>(product?.colors[0])
    // const { addItem, incrementItem, cartDetails } = useShoppingCart()
    // const isInCart = !!cartDetails?.[product._id]
    // const { toast } = useToast()

    const addToCart = () => dispatch(
        {
            type: REDUCER_ACTIONS.ADD,
            payload: { ...product, qty: 1, sizes: selectSize, colors: selectColor }
        }
    )

    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight">{name}</h1>

            <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight">{formatCurrency(price)}</p>
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
                    <Button
                        onClick={() => {
                            // addSize()
                            setSelectedSize(size)
                        }}
                        variant={selectSize === size ? "outline" : "default"}
                        key={size} className="mr-2 mt-4">
                        {getSizeName(size)}
                    </Button>
                ))}
            </div>
            <div className="mt-4">
                <p>
                    Color: <strong>{(selectColor)}</strong>
                </p>
                {colors.map((color: string | undefined) => (
                    <Button
                        onClick={() => {
                            setSelectedColor(color)
                        }}
                        variant={selectColor === color ? "outline" : "default"}
                        key={color} className="mr-2 mt-4">
                        {color?.toUpperCase()}
                    </Button>
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
