import { ChangeEvent, ReactElement, useState } from "react"
import Link from "next/link"
import { InventoryType, } from "@/data/inventory"
import useCart from "@/hooks/useCart"
import { formatCurrency, getSizeName, usCurrency } from "@/utils/util"
import { Button } from "./ui/Button"
import { CartItemType } from "@/context/CartProvider"
import Image from "next/image"
import shopping from "@/public/shopping.svg"
import { Roboto } from "next/font/google"
// import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

interface PropsType {
    product: InventoryType | undefined
}
const roboto = Roboto({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
})

export function ProductInfo({ product }: PropsType) {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { name, description, price, sizes, colors, } = product
    const [selectSize, setSelectedSize] = useState((sizes?.[0]))
    const [selectColor, setSelectedColor] = useState<string | undefined>(colors?.[0])
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
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 space-y-2 md:space-y-4 lg:space-y-7">
            <h1 className=" text-xl  md:text-3xl font-bold tracking-tight text-blue-300">{name}</h1>
            <div className="mt-3 text-gray-800">
                <h2 className="sr-only">Product information</h2>
                <p className="text-xl md:text-3xl font-semibold tracking-tight">{formatCurrency(price)}</p>
                <p className="text-xl md:text-3xl font-semibold tracking-tight">{usCurrency(price)}</p>
            </div>

            <div className="mt-6 border-b-2 border-gray-600 border-opacity-15 pb-2">
                <h3 className="sr-only text-gray-800">Description</h3>
                <div className={`space-y-6 text-sm  text-gray-600 ${roboto.className}`}>{description}</div>
            </div>

            <div className="text-gray-900">
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
                <div className="mt-4 mb-4 border-b-2 border-gray-600 border-opacity-15 pb-2">
                    <p>
                        Color: <strong>{(selectColor)}</strong>
                    </p>
                    {colors.map((color: string | undefined) => (
                        <Button
                            onClick={() => {
                                setSelectedColor(color)
                            }}
                            variant={selectColor === color ? "outline" : "default"}
                            key={color} className="mt-4">
                            {color?.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>

            <form className="flex items-center justify-center space-x-2 md:space-x-1 mt-4 border-b-2 border-gray-600 border-opacity-15 pb-5 " >
                <input
                    id={`quantity-${product?.id}`}
                    name={`quantity-${product?.id}`}
                    type="number"
                    className="w-16 text-black text-center outline-none h-16 border-2 border-gray-700 border-opacity-10"
                    min={1}
                    max={10}
                    value={itemQuantity}
                    placeholder="1"
                    onChange={event => setItemQuantity(Number(event.target.value))}
                />


                <div className=" flex flex-1 md:justify-center">
                    <button
                        onClick={addToCart}
                        type="button"
                        className="w-60 md:w-80 lg:w-64 text-sm bg-gray-900 h-16 md:text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black flex items-center  justify-center"
                        disabled={itemQuantity === 0}
                    >
                        ADD TO CART
                        <Image src={shopping} width={24} alt="shopping cart" className="ml-3" />
                    </button>
                </div>
                <button onClick={onDelete} className="w-20 text-center outline-none font-semibold text-gray-200 md:text-base text-[0.8rem] h-16 bg-red-800">
                    CLEAR
                </button>
            </form>

        </div>
    )
}
