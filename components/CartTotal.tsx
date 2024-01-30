import useCart from '@/hooks/useCart'
import { formatCurrency, formatVAT } from '@/utils/util'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const CartTotal = () => {
    const { totalPrice, totalPriceNumber } = useCart()
    return (
        <div className={`${roboto.className} text-gray-800`} >

            <div className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4'>
                <p>Subtotal</p>
                <p className='font-semibold'>
                    {totalPrice}
                </p>
            </div>

            <div className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4 font-'>
                <p>VAT(7.5%)</p>

                <p className='font-semibold'>{formatCurrency(formatVAT(totalPriceNumber))}</p>
            </div>
            <div className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4 '>
                <p>Total</p>

                <p className='font-semibold' >{formatCurrency(formatVAT(totalPriceNumber) + totalPriceNumber)}</p>
            </div>
        </div>

    )
}

export default CartTotal