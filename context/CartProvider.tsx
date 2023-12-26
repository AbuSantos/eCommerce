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
    ADD:"ADD",
    REMOVE:"REMOVE",
    
}

const CartProvider = () => {
    return (
        <div>CartProvider</div>
    )
}

export default CartProvider