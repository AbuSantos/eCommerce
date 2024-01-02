import { InventoryType, inventory } from "@/data/inventory";
import { ReducerActionType, ReducerAction } from "@/context/CartProvider";
import { ReactElement } from "react";
import Image from "next/image";

type PropsType = {
    product: InventoryType,
    dispatch: React.Dispatch<ReducerAction>,
    inCart: boolean,
    REDUCER_ACTIONS: ReducerActionType,

}

const Product = ({ product, dispatch, inCart, REDUCER_ACTIONS }: PropsType): ReactElement => {
    console.log(product);
    const addToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? "Item in cart: ✅" : null

    const formatCurrency = (value: any) => {

        const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "NGN" }).format(value)

        return currency
    }

    const content =
        <div className="grid grid-cols-3">
            <article >
                <h3>{product.name}</h3>
                <img
                    src={product?.image}
                    width={300}
                    height={200}
                    alt={product.name}
                />
                <p className="w-4/12">{product.description}</p>
                <p>
                    {formatCurrency(product.price)}{itemInCart}
                </p>
                <button onClick={addToCart}>Add to Cart</button>
            </article>
        </div>


    return content
}

export default Product
