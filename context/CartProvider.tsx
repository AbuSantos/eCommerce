export type CartItemType = {
    id: string,
    name: string,
    image: string,
    images: string[],
    sizes: string[],
    colors: string[],
    price: number,
    sku: string,
    qty: number,
    desccription: string,
    currency: string
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            
        }
            
            break;
    
        default:
            break;
    }
}
const CartProvider = () => {
    return (
        <div>CartProvider</div>
    )
}

export default CartProvider