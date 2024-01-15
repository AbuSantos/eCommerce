"use client"
import React from 'react'
import { CartItemType } from "@/context/CartProvider"
import { ReducerAction } from "@/context/CartProvider"
import { ReducerActionType } from "@/context/CartProvider"
import { formatCurrency, formatVAT } from "@/utils/util"
import { ChangeEvent, Dispatch, ReactElement, useState } from "react"
import useCart from '@/hooks/useCart'
import { Button } from '@/components/ui/Button'
import BreadCrumps from '@/components/ui/BreadCrumps'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import payment from "@/public/payment.svg"

const Cart = () => {
    const router = usePathname()
    const isCartPage = router.includes('/cart');
    console.log(isCartPage);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, totalPriceNumber, cart } = useCart()
    console.log(totalPrice);

    // const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)
    // const options: ReactElement[] = optionValues.map(val => {
    //     return (
    //         <option key={`opt${val}`} value={val} >{val}</option>
    //     )
    // })

    return (
        <div>

            <BreadCrumps isCartPage={isCartPage} />

            <div className='grid grid-cols-3 w-8/12 m-auto space-x-8 mt-20'>
                <div className="product flex space-x-10 justify-between col-span-2 ">
                    <table className='w-full p-2'>
                        <thead>
                            <tr className='border-b-2 border-gray-500 border-opacity-90 mb-3'>
                                <th className='w-6/12 text-left'>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.length === 0 ? (
                                <tr>
                                    <td colSpan="4">
                                        <h3>Cart is empty</h3>
                                    </td>
                                </tr>
                            ) : (
                                cart.map((item, index) => (
                                    <tr key={item.id} className='border-b-2 border-gray-500 border-opacity-90 '>

                                        <td className='p-5'>
                                            <div className='flex w-80  items-center space-x-2'>
                                                <button className=' hover:bg-slate-800  h-10 w-10 rounded-full flex items-center justify-center' onClick={() => dispatch({
                                                    type: REDUCER_ACTIONS.REMOVE, payload: item
                                                })}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                                        <path d="M7 12L17 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <img
                                                    className=" w-24 h-24 shadow"
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                                <div>
                                                    <p className='text-sm text-gray-400'>{item.name}</p>
                                                    <p className='text-sm text-gray-400'>{item.colors}</p>
                                                    <p className='text-sm text-gray-400'>{item.sizes}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{formatCurrency(item.price)}</td>
                                        <td>
                                            {/* <select name="itemQty" id="itemQty"
                                                value={item.qty}
                                                aria-label="Item Quantity"
                                                onChange={(e) => dispatch({
                                                    type: REDUCER_ACTIONS.QUANTITY,
                                                    payload: { ...item, qty: Number(e.target.value) }
                                                })}
                                                className="ml-5"
                                            >
                                                {options}
                                            </select> */}
                                        </td>
                                        <td>{formatCurrency(item.price * item.qty)}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                </div>
                <div className="cart-basket  w-full">
                    <h2 className='mb-8'>CART TOTALS</h2>
                    <div className=' w-full'>


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
                        <div className='w-full bg-gray-900  flex items-center justify-center'>
                            <Link
                                className="p-4 w-full text-center"
                                href="/checkout"
                            >
                                {/* <img src={payment} alt="payment" /> */}
                                PAY NOW
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart