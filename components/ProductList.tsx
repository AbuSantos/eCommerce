import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct"
import { UseProductContextType } from "@/context/InventoryProvider";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products } = useProduct()

    let pageContent: ReactElement | ReactElement[] = <p>loading...</p>

    if (products?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.id === product.id);
            return (
                <Product
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }
    const content = (
        <main className="grid grid-cols-3 w-10/12 gap-4  m-auto">
            {pageContent}
        </main>

    )


    return content
}

export default ProductList