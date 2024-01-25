import { Dispatch, SetStateAction } from "react";
import NavButton from "./NavButton";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png"


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
            <div className="flex justify-between items-center text-gray-900">
                <Link href="/">
                    <Image src={logo} alt="Ruth Rich Designs" className="w-24 h-24" />
                </Link>
                <div className=" space-x-2 flex ">

                    <div className="relative">
                        <button onClick={toggleSideCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "#000000", transform: "msFilter" }}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                        </button>
                        {totalItems > 0 && <p className="absolute top-0 ml-3 -mt-2 text-[0.7rem]  font-medium text-center bg-red-500 w-4 h-4 rounded-full">{totalItems}</p>}
                    </div>
                    <svg viewBox="0 0 1024 1024" className="icon" width={24} version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z" fill="#4A5699"></path><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z" fill="#C45FA0"></path><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F"></path></g></svg>
                </div>
            </div>

        </header>
    )
    return content
}

export default Header