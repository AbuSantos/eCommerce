import CartContext, { UseCartContextType } from "@/context/CartProvider";
import { useContext } from "react";

const useProduct = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useProduct