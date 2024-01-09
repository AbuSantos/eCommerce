import { CartItemType } from "@/context/CartProvider"
import { ReducerAction } from "@/context/CartProvider"
import { ReducerActionType } from "@/context/CartProvider"
import { formatCurrency } from "@/utils/util"
import { validateHeaderValue } from "http"
import { ChangeEvent, Dispatch, ReactElement } from "react"

type PropsType = {
    dispatch: Dispatch<ReducerAction>,
    item: CartItemType,
    REDUCER_ACTIONS: ReducerActionType,

}
const CartLineItem = ({ dispatch, item, REDUCER_ACTIONS }: PropsType) => {

    const lineTotal: number = item.qty * item.price

    // If 15 is greater than item.qty, then highestQty is assigned the value 15.
    // If 15 is not greater than item.qty, then highestQty is assigned the value of item.qty.
    const highestQty: number = 15 > item.qty ? 15 : item.qty

    // we making an array of the qty numbers so we can pass the value for the option
    const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)
    const options: ReactElement[] = optionValues.map(val => {
        return (
            <option key={`opt${val}`} value={val} >{val}</option>
        )
    })

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) }
        })
    }

    const onremove = () => dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })

    const content = (
        <li>
            <img
                className="border border-gray-200 rounded-lg rounded-b-none shadow"
                src={item.image}
                alt={item.name}
            />
            <div>
                {item.name}
            </div>
            <div>
                {formatCurrency(item.price)}
            </div>
            <label htmlFor="itemQty">Item Quantity</label>
            <select name="itemQty" id="itemQty"
                value={item.qty}
                aria-label="Item Quantity"
                onChange={onChange}
            >
                {options}
            </select>
            <div aria-label="Line Item SubTotal">
                {formatCurrency(lineTotal)}
            </div>
        </li>
    )
    return content
}

export default CartLineItem