import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct"
// import { UseProductContextType } from "@/context/InventoryProvider";
import { ReactElement } from "react";
import Product from "./Product";
import SideCart from "./SideCart";

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products } = useProduct()

    let pageContent: ReactElement | ReactElement[] = <p>loading...</p>
    if (products?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.id === product.id);
            return (
                <>
                    <Product
                        key={product.id}
                        product={product}
                        dispatch={dispatch}
                        REDUCER_ACTIONS={REDUCER_ACTIONS}
                        inCart={inCart}
                    />
                </>
            )
        })
    }
    const content = (
        <main className="grid grid-cols-2 gap-2 md:grid-cols-3 w-9/12 m-auto">
            {pageContent}
        </main>

    )
    return content
}

export default ProductList