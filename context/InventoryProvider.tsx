import { InventoryType, inventory } from "@/data/inventory";
import { ReactNode, createContext, useState } from "react";

//creating a hook with the InventoryType
export type UseProductContextType = { products: InventoryType[] };
const initContextState: UseProductContextType = { products: [] };

const ProductsContext = createContext<UseProductContextType>(initContextState)

type Children = { children?: ReactNode | ReactNode[] };

// creating a product provider context of type InventoryType  
export const ProductProvider = ({ children }: Children): ReactNode => {
    const [products, setProducts] = useState<InventoryType[]>(inventory)
    return (
        <ProductsContext.Provider value={{ products }} >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;


