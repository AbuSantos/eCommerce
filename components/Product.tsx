import { InventoryType, inventory } from "@/data/inventory";
import { ReducerActionType, ReducerAction } from "@/context/CartProvider";
import { ReactElement, useEffect, useState } from "react";
import "@/style/style.module.css"
import Link from "next/link";
import { formatCurrency } from "@/utils/util";
import Modal from "./ui/Modal";
import SideCart from "./SideCart";


type PropsType = {
    product: InventoryType,
    dispatch: React.Dispatch<ReducerAction>,
    inCart: boolean,
    REDUCER_ACTIONS: ReducerActionType,
}

const Product = ({ product, dispatch, inCart, REDUCER_ACTIONS }: PropsType): ReactElement => {
    const [added, setAdded] = useState<String>('Add to Cart')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const addToCart = () => dispatch({
        type: REDUCER_ACTIONS.ADD, payload: {
            ...product, qty: 1
        }
    })
    useEffect(() => {
        // Update the added state when inCart changes
        if (inCart) {
            setAdded("carted: ✅");

            // Reset the added state after 2 seconds
            setTimeout(() => {
                setAdded("Add to Cart");
            }, 2000);

        } else {
            // If not in cart, set the default message
            setAdded("Add to Cart");
        }
    }, [inCart]);

  
    const content = (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                {isOpen && <Modal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>

            {/* <SideCart /> */}
            <Link href={`/product/${product.id}/`}>
                <img
                    className="border border-gray-200 rounded-lg rounded-b-none shadow"
                    src={product.image}
                    alt={product.name}
                />
            </Link>

            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="py-2">{product.name}</h3>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white"> {formatCurrency(product.price)}</span>
                    <button onClick={() => setIsOpen((prev) => !prev)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{added}</button>
                </div>
            </div>
        </div >

    )


    return content
}

export default Product
