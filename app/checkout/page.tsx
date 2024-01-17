"use client"
// import AddressForm from '@/components/AddressForm'
// import CartLineItem from '@/components/CartLineItem'
// import CartTotal from '@/components/CartTotal'
// import BreadCrumps from '@/components/ui/BreadCrumps'
// import useCart from '@/hooks/useCart'
// import { usePathname } from 'next/navigation'
// import { Dispatch, SetStateAction, useState } from 'react';

// import React from 'react'

// const CheckOut = () => {
//     const router = usePathname()
//     const isCheckOut = router.includes('/checkout');
//     console.log(isCheckOut);
//     const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();


//     return (
//         <div>
//             < BreadCrumps isCheckOut={isCheckOut} />
//             <div className='grid grid-cols-3  w-8/12 m-auto '>
//                 <div className='col-span-2'>
//                     <AddressForm />
//                 </div>
//                 <div className='mt-8 w-full mr-7'>
//                     {cart.map((item, index) => (
//                         <div className='mb-3'>
//                             <CartLineItem
//                                 key={index}
//                                 item={item}
//                                 dispatch={dispatch}
//                                 REDUCER_ACTIONS={REDUCER_ACTIONS}
//                             />
//                         </div>
//                     ))}
//                     <CartTotal />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CheckOut

// pages/checkout.tsx

import React from 'react';
import PaystackPayment from '@/components/PaystackPayment';

const CheckoutPage: React.FC = () => {
    const handlePaymentSuccess = (response: any) => {
        // Handle payment success
        console.log(response);
    };

    return (
        <div>
            <h1>Checkout Page</h1>
            <PaystackPayment
            // amount={5000} // Replace with your desired amount
            // email="abusomwansantos@gmail.com" // Replace with the user's email
            // onSuccess={handlePaymentSuccess}
            />
        </div>
    );
};

export default CheckoutPage;
