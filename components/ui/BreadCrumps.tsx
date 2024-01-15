"use client"
import { useRouter } from "next/navigation"

type PropsType = {
    isCartPage?: boolean,
    isCheckOut?: boolean,

}
const BreadCrumps = ({ isCartPage, isCheckOut }: PropsType) => {
    const router = useRouter()
    return (
        <div className="breadcrump flex justify-between items-center m-auto w-8/12 cursor-pointer mt-14  ">
            <div className={`shopping-cart flex items-center space-x-2  ${isCartPage ? 'opacity-100' : "opacity-50"}`} onClick={() => router.push("/cart")}>
                <h1 className='font-medium text-7xl'>I</h1>
                <div >
                    <h3 className='font-semibold'>CART</h3>
                    <p className='text-gray-400'>Manage your Items List</p>
                </div>
            </div>
            <div className={`checkout-details flex items-center space-x-2 ${isCheckOut ? 'opacity-100' : "opacity-50"}`} onClick={() => router.push("/checkout")}>
                <h1 className='font-medium text-7xl' >II</h1>
                <div>
                    <h3 className='font-semibold'>CHECKOUT DETAILS</h3>
                    <p className='text-gray-400'>Manage payment details and Shipping Address</p>
                </div>
            </div>
            <div className="order-complete flex items-center space-x-2 ">
                <h1 className='font-medium text-7xl'>III</h1>
                <div>
                    <h3 className='font-semibold'>ORDER COMPLETE</h3>
                    <p className='text-gray-400'>Manage your Items List</p>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumps