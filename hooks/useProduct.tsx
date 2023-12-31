import ProductsContext, { UseProductContextType } from "@/context/InventoryProvider";
import { useContext } from "react";

const useProduct = (): UseProductContextType => {
    return useContext(ProductsContext)
}

export default useProduct