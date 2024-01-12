import { CartItemType } from "@/context/CartProvider"
import { ReducerAction } from "@/context/CartProvider"
import { ReducerActionType } from "@/context/CartProvider"
import { formatCurrency } from "@/utils/util"
import { validateHeaderValue } from "http"
import { ChangeEvent, Dispatch, ReactElement, useState } from "react"

type PropsType = {
    dispatch: Dispatch<ReducerAction>,
    item: CartItemType,
    REDUCER_ACTIONS: ReducerActionType,

}
const CartLineItem = ({ dispatch, item, REDUCER_ACTIONS }: PropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
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

    const onremove = () => {
        dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })
        setIsOpen(true)
    }

    const content = (
        <li className={`flex space-x-6 w-[18rem] ${isOpen ? 'translate-x-0' : ''
            }`}>
            <img
                className=" w-24 h-24 shadow"
                src={item.image}
                alt={item.name}
            />
            <div>
                <p className="font-bold">
                    {item.name}
                </p>
                <div className="text-[0.75rem] w-[10rem] text-gray-500 p-2">
                    {formatCurrency(item.price)}

                    <select name="itemQty" id="itemQty"
                        value={item.qty}
                        aria-label="Item Quantity"
                        onChange={onChange}
                        className="ml-5"
                    >
                        {options}
                    </select>
                </div>
                <div aria-label="Line Item SubTotal">
                    {formatCurrency(lineTotal)}
                </div>
            </div>
            <div className="">
                <button onClick={onremove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "#df0707", transform: " msFilter" }}><path d="M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path><path d="M7.874 12h8v2h-8z"></path></svg>
                </button>

            </div>
        </li>
    )
    return content
}

export default CartLineItem