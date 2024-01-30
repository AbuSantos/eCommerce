"use client"
import { useRouter } from "next/navigation"

type PropsType = {
    isCartPage?: boolean,
    isCheckOut?: boolean,
    isOrder?: boolean,

}
const BreadCrumps = ({ isCartPage, isCheckOut, isOrder }: PropsType) => {
    const router = useRouter()
    return (
        <div className="w-full bg-gray-900 ">

            <div className="breadcrump grid lg:grid-cols-3  m-auto w-10/12 cursor-pointer mt-14 p-3 text-gray-50">

                <div className={`shopping-cart flex items-center justify-center space-x-2  ${isCartPage ? 'opacity-100  md:flex' : "opacity-50 hidden md:flex"}`} onClick={() => router.push("/cart")}>
                    <h1 className='font-medium text-7xl hidden md:inline-block'>I</h1>
                    <div >
                        <h3 className='font-semibold'>CART</h3>
                        <p className='text-gray-400 text-[0.8rem] md:text-sm hidden md:inline-block'>Manage your Items List</p>
                    </div>
                </div>
                <div className={`checkout-details flex items-center justify-center space-x-2 ${isCheckOut ? 'opacity-100 md:flex' : "opacity-50 hidden md:flex"}`} onClick={() => router.push("/checkout")}>
                    <h1 className='font-medium text-7xl hidden md:inline-block' >II</h1>
                    <div>
                        <h3 className='font-semibold text-center'>CHECKOUT DETAILS</h3>
                        <p className='text-gray-400 text-[0.8rem] md:text-sm hidden md:inline-block'>Manage payment details and Shipping Address</p>
                    </div>
                </div>
                <div className={`checkout-details flex items-center justify-center  space-x-2 ${isOrder ? 'opacity-100 md:flex' : "opacity-50 hidden md:flex"}`} onClick={() => router.push("/order")}>
                    <h1 className='font-medium text-7xl hidden md:inline-block'>III</h1>
                    <div>
                        <h3 className='font-semibold'>ORDER COMPLETE</h3>
                        <p className='text-gray-400 text-[0.8rem] md:text-sm hidden md:inline-block'>Manage your Items List</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumps