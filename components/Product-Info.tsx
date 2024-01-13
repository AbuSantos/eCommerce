import { ChangeEvent, useState } from "react"
import Link from "next/link"
import { InventoryType, } from "@/data/inventory"
import useCart from "@/hooks/useCart"
import { formatCurrency, getSizeName } from "@/utils/util"
import { Button } from "./ui/Button"
import { CartItemType } from "@/context/CartProvider"

// import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

interface PropsType {
    product: CartItemType | undefined
}

export function ProductInfo({ product }: PropsType) {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { name, description, price, sizes, colors, } = product
    const [selectSize, setSelectedSize] = useState<string | undefined>(product?.sizes[0])
    const [selectColor, setSelectedColor] = useState<string | undefined>(product?.colors[0])
    const [itemQuantity, setItemQuantity] = useState<number | undefined>()

    // const { addItem, incrementItem, cartDetails } = useShoppingCart()
    // const isInCart = !!cartDetails?.[product._id]
    // const { toast } = useToast()

    const addToCart = () => {
        dispatch(
            {
                type: REDUCER_ACTIONS.ADD,
                payload: {
                    ...product,
                    sizes: selectSize,
                    colors: selectColor
                }
            }
        )
        onChangeQty()
    }

    const onChangeQty = () => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY, payload:
            {
                ...product,
                qty: itemQuantity
            }
        })
    }

    const onDelete = () => dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: product })

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

            <div className="flex space-x-5">
                <div className="mt-4">
                    <p >
                        Size: <strong>{getSizeName(selectSize)}</strong>
                    </p>
                    {sizes.map((size: string | undefined) => (
                        <Button
                            onClick={() => {
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
            </div>

            <form className="flex items-center justify-center space-x-3 mt-4" >
                <input
                    id={`quantity-${product?.id}`}
                    name={`quantity-${product?.id}`}
                    type="number"
                    className="w-16 text-black text-center outline-none h-16"
                    min={1}
                    max={10}
                    value={itemQuantity}
                    placeholder="1"
                    onChange={event => setItemQuantity(Number(event.target.value))}
                />

                <div className=" flex flex-1">
                    <button
                        onClick={addToCart}
                        type="button"
                        className="w-72 bg-gray-900 h-16 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        Add to cart
                    </button>
                </div>
                <button onClick={onDelete} className="w-20 text-center outline-none text-gray-100 text-base h-16 bg-red-800">
                    clear
                </button>
            </form>

        </div>
    )
}
