import { Dispatch, SetStateAction } from "react";
import NavButton from "./NavButton";
import useCart from "@/hooks/useCart";
import Link from "next/link";

// type PropsType = {
//     viewCart: boolean;
//     setViewCart: Dispatch<SetStateAction<boolean>>
// }
type PropsType = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Header = ({ isOpen, setIsOpen }: PropsType) => {
    const { totalItems, totalPrice } = useCart() || {}
    // console.log(viewCart);

    const toggleSideCart = () => {
        setIsOpen(!isOpen);
    };
    const content = (
        <header className="w-11/12 m-auto p-3">
            <div className="flex justify-between">
                <Link href="/">buyMe</Link>
                <div className="relative">
                    <button onClick={toggleSideCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "#ffffff", transform: "msFilter" }}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                    </button>
                    {totalItems > 0 && <p className="absolute top-0 ml-3 -mt-2 text-[0.7rem]  font-medium text-center bg-red-500 w-4 h-4 rounded-full">{totalItems}</p>}

                </div>
            </div>
        </header>
    )
    return content
}

export default Header