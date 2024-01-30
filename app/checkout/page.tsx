"use client"
import PaystackPayment from '@/components/PaystackPayment';

import AddressForm from '@/components/AddressForm'
import CartLineItem from '@/components/CartLineItem'
import CartTotal from '@/components/CartTotal'
import BreadCrumps from '@/components/ui/BreadCrumps'
import useCart from '@/hooks/useCart'
import { usePathname } from 'next/navigation'


const CheckOut = () => {
    const pathname = usePathname()
    const isCheckOut = pathname.includes('/checkout');
    console.log(isCheckOut);
    const { dispatch, REDUCER_ACTIONS, totalPriceNumber, cart } = useCart();


    return (
        <div>
            < BreadCrumps isCheckOut={isCheckOut} />
            <div className='grid md:grid-cols-3  md:w-8/12 w-11/12 m-auto '>

                <div className='mt-8 w-full mr-7'>
                    {cart.map((item, index) => (
                        <div className='mb-3' key={index}>
                            <CartLineItem
                                key={index}
                                item={item}
                                dispatch={dispatch}
                                REDUCER_ACTIONS={REDUCER_ACTIONS}
                            />
                        </div>
                    ))}
                    <div>
                        <CartTotal />
                    </div>
                </div>
                <div className='col-span-2'>
                    <AddressForm />
                </div>
            </div>
        </div>
    )
}

export default CheckOut

