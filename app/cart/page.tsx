"use client"
import React from 'react'
import { CartItemType } from "@/context/CartProvider"
import { ReducerAction } from "@/context/CartProvider"
import { ReducerActionType } from "@/context/CartProvider"
import { formatCurrency } from "@/utils/util"
import { ChangeEvent, Dispatch, ReactElement, useState } from "react"
import useCart from '@/hooks/useCart'

const Cart = () => {

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()
    console.log(cart);
    // const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)
    // const options: ReactElement[] = optionValues.map(val => {
    //     return (
    //         <option key={`opt${val}`} value={val} >{val}</option>
    //     )
    // })

    return (
        <div>

            <div className="breadcrump flex justify-between items-center m-auto w-8/12 cursor-pointer mt-14  ">
                <div className="shopping-cart flex items-center space-x-2 ">
                    <h1 className='font-medium text-7xl'>I</h1>
                    <div >
                        <h3 className='font-semibold'>CART</h3>
                        <p className='text-gray-400'>Manage your Items List</p>
                    </div>
                </div>
                <div className="checkout-details flex items-center space-x-2 ">
                    <h1 className='font-medium text-7xl' >II</h1>
                    <div>
                        <h3 className='font-semibold'>CHECKOUT DETAILS</h3>
                        <p>Manage payment details and Shipping Address</p>
                    </div>
                </div>
                <div className="order-complete flex items-center space-x-2 ">
                    <h1 className='font-medium text-7xl'>III</h1>
                    <div>
                        <h3 className='font-semibold'>ORDER COMPLETE</h3>
                        <p>Manage your Items List</p>
                    </div>
                </div>
            </div>

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
                                            <div className='flex w-64  items-center space-x-2'>
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
                                                    <p>{item.colors}</p>
                                                    <p>{item.sizes}</p>
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
                <div className="cart-basket bg-red-700">basket</div>
            </div>

        </div>
    )
}

export default Cart