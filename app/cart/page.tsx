"use client"
import React from 'react'
import { CartItemType } from "@/context/CartProvider"
import { ReducerAction } from "@/context/CartProvider"
import { ReducerActionType } from "@/context/CartProvider"
import { formatCurrency } from "@/utils/util"
import { ChangeEvent, Dispatch, ReactElement, useState } from "react"
import useCart from '@/hooks/useCart'
import { Button } from '@/components/ui/Button'
import BreadCrumps from '@/components/ui/BreadCrumps'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const Cart = () => {
    const router = usePathname()
    const isCartPage = router.includes('/cart');
    console.log(isCartPage);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()
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
                                                <button className=' hover:bg-slate-800  h-5 w-5 rounded-full' onClick={() => dispatch({
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
                <div className="cart-basket ">
                    <h2>CART TOTALS</h2>
                    <div>
                        {
                            cart.length > 0 && cart.map((item, index) => (
                                <div>
                                    <div key={index} className='flex justify-between items-center border-b-2 border-gray-600 border:opacity-50 p-4'>
                                        <p>Subtotal</p>
                                        <p>
                                            {formatCurrency(item.price * item.qty)}
                                        </p>
                                    </div>
                                    <div>
                                        <p>VAT(7.5%)</p>
                                    </div>
                                </div>
                            ))
                        }
                        <Button variant="buy">Checkout</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart