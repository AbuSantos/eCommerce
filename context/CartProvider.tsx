"use client"
import { InventoryType, inventory } from "@/data/inventory";
import { StaticImageData } from "next/image";
import { useMemo, useReducer, createContext, ReactNode, ReactElement } from "react";

export type CartItemType = {
    id: string,
    name: string,
    image: string | StaticImageData;
    images: string[] | StaticImageData[];
    sizes: string[] | string,
    colors: string[] | string,
    price: number,
    sku: string,
    qty?: number,
    description: string,
    categories: string[]
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            // placing a type guard just incase a value is mising
            if (!action.payload) {
                throw new Error("action.payload missing in ADD action")
            }
            //we distructuring the items we need
            const {
                id,
                name,
                image,
                images,
                sizes,
                colors,
                price,
                sku,
                description,
                categories,
            } = action.payload

            // we filtered out the other items that wont be updated
            const filteredCart: CartItemType[] = state.cart.filter(item => item.id !== id)
            const itemsExist: CartItemType | undefined = state.cart.find(item => item.id === id)
            // we check the cart if it already has an itemsExist, if not we add 1
            const qty: number = itemsExist ? itemsExist?.qty + 1 : 1
            return {
                ...state, cart: [...filteredCart, {
                    id,
                    name,
                    image,
                    images,
                    sizes,
                    colors,
                    price,
                    sku,
                    qty,
                    description,
                    categories
                }]
            }

        }

        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload missing in QUANTITY action")
            }
            const {
                id,
                qty
            } = action.payload

            // we filtered out the other items that wont be updated
            const itemExist: CartItemType | undefined = state.cart.find(item => item.id === id)
            // we throw a new error of the item does not exist
            if (!itemExist) {
                throw new Error("Item does not exist or its no Longer available")
            }
            const updatedItem: CartItemType = { ...itemExist, qty }

            const filteredCart: CartItemType[] = state.cart.filter(item => item.id !== id)
            return { ...state, cart: [...filteredCart, updatedItem] }
        }


        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload missing in REMOVE action")
            }
            const {
                id
            } = action.payload

            // we filtered out the other items that wont be updated
            const filteredCart: CartItemType[] = state.cart.filter(item => item.id !== id)
            return { ...state, cart: [...filteredCart] }
        }

        //we will set up the payment with paystack soon
        case REDUCER_ACTION_TYPE.SUBMIT: {
            if (!action.payload) {
                throw new Error("action.payload missing in SUBMIT action")
            }
            return { ...state, cart: [] }
        }
        default:
            throw new Error("Unidentified Reducer action type")
    }
}

const useCartContext = (inventory: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, inventory)

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItems: number = state.cart.reduce((prev, cartItem) => {
        return prev + cartItem.qty
    }, 0)

    const totalPriceNumber = state.cart.reduce((prev, cartItem) => {
        return prev + (cartItem.price * cartItem.qty)
    }, 0)
    const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(
        //the 0 starts the reduce with the initial value
        state.cart.reduce((prev, cartItem) => {
            return prev + (cartItem.price * cartItem.qty)
        }, 0))

    const cart = state.cart.sort((a, b) => a.price - b.price)

    return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart, totalPriceNumber }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: () => { },
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    totalPriceNumber: 0,
    cart: []
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type childrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: childrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext