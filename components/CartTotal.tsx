import useCart from '@/hooks/useCart'
import { formatCurrency, formatVAT } from '@/utils/util'
import React from 'react'

const CartTotal = () => {
    const { totalPrice, totalPriceNumber } = useCart()
    return (
        <div>

            <div className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4'>
                <p>Subtotal</p>
                <p>
                    {totalPrice}
                </p>
            </div>

            <div className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4'>
                <p>VAT(7.5%)</p>

                <p>{formatCurrency(formatVAT(totalPriceNumber))}</p>
            </div>
            <div className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4'>
                <p>Total</p>

                <p>{formatCurrency(formatVAT(totalPriceNumber) + totalPriceNumber)}</p>
            </div>
        </div>

    )
}

export default CartTotal