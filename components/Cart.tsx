import useCart from "@/hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
    const [confirmed, setConfirmed] = useState<boolean>(false)

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirmed(true)

    }

    const pageContent = confirmed ? <h2>Thank you for your order</h2>
        : <>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => {
                    return (
                        <CartLineItem
                            key={item.id}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS} />
                    )
                })}
            </ul>
            <div>
                <p>
                    Total Items: {totalItems}
                </p>
                <p>Total Price: {totalPrice}</p>
                <button disabled={!totalItems} type="submit" onClick={onSubmitOrder} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Place Order</button>

            </div>
        </>
    return pageContent
}

export default Cart