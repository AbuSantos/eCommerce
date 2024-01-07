import { Dispatch, SetStateAction } from "react";
import NavButton from "./NavButton";
import useCart from "@/hooks/useCart";

type PropsType = {
    viewCart: boolean;
    setViewCart: Dispatch<SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart() || {}
    console.log(viewCart);

    const content = (
        <header className="w-11/12 m-auto">
            <div className="flex justify-between">
                <h1>buyMe</h1>
                <div>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                    <NavButton viewCart={viewCart} setViewCart={setViewCart} />
                </div>
            </div>
        </header>
    )
    return content
}

export default Header