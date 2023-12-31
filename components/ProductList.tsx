import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct"
import { UseProductContextType } from "@/context/InventoryProvider";
import { ReactElement } from "react";

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS } = useCart()
    const { products } = useProduct()
    console.log(products);

    let pageContent: ReactElement | ReactElement[] = <p>loading...</p>

    return (
        <div>ProductList</div>
    )
}

export default ProductList