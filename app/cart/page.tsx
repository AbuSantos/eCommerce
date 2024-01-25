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
import CartTotal from '@/components/CartTotal'
import Image from 'next/image'

const Cart = () => {
    const router = usePathname()
    const isCartPage = router.includes('/cart');
    console.log(isCartPage);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, totalPriceNumber, cart } = useCart()
    console.log(totalPrice);

    const options: ReactElement[] = cart
        .map((item) => {
            const highestQty: number = 15 > item.qty ? 15 : item.qty;

            const optionValues: number[] = [...Array(highestQty).keys()].map((i) => i + 1);

            return optionValues.map((val) => (
                <option key={`opt${val}`} value={val}>
                    {val}
                </option>
            ));
        })
        .flat();

    const onDrag = () => {
        console.log("dragged");

    }

    return (
        <div>

            <BreadCrumps isCartPage={isCartPage} />

            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 w-10/12 m-auto space-x-8 mt-20 '>
                <div className="product hidden md:flex space-x-10 justify-between col-span-2 text-gray-800 ">
                    <table className=' w-full p-2'>
                        <thead>
                            <tr className='border-b-2 border-gray-500 border-opacity-90 mb-3'>
                                <th className='text-left text-sm  md:text-base' >PRODUCT</th>
                                <th className='text-[0.7rem]  md:text-base'>PRICE</th>
                                <th className='text-[0.7rem]  md:text-base'>QUANTITY</th>
                                <th className='text-[0.7rem]  md:text-base'>SUBTOTAL</th>
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
                                            <div className='flex items-center space-x-2 '>
                                                <button className=' hover:bg-slate-800  h-10 w-10 rounded-full flex items-center justify-center' onClick={() => dispatch({
                                                    type: REDUCER_ACTIONS.REMOVE, payload: item
                                                })}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                                        <path d="M7 12L17 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <img
                                                    className=" md:w-24 md:h-24 shadow w-20 h-20"
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                                <div>
                                                    <p className='md:text-sm lg:text-base lg:font-semibold text-[0.7rem] text-gray-400'>{item.name}</p>
                                                    <div className='space-x-2'>
                                                        <p className='md:text-sm lg:text-base text-[0.7rem] text-gray-400'>{item.colors}</p>
                                                        <p className='md:text-base text-[0.7rem] capitalize text-gray-400'>{item.sizes}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='md:text-lg text-[0.7rem]'>{formatCurrency(item.price)}</td>
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
                                        <td className='md:text-lg text-[0.7rem]'>{formatCurrency(item.price * item.qty)}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                </div>
                <div className="mobile md:hidden ">
                    <div className='mb-8'>
                        <div className="header flex justify-between uppercase font-semibold  mb-5 border-b-4 border-gray-400 border-opacity-30">
                            <h3>Product </h3>
                            <h3>Quantity </h3>
                        </div>
                        <div className='border-b-4  border-gray-400 border-opacity-30'>

                            {
                                cart.map((item) => (
                                    <div className='grid grid-cols-2 mb-3'>
                                        <div className='flex'>
                                            <div className="flex">
                                                <button onClick={() => dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 24 24" style={{ fill: "#df0707", transform: "msFilter" }}><path d="M7.874 12h8v2h-8z"></path></svg>
                                                </button>
                                            </div>
                                            <Image
                                                className="w-24 h-24 shadow"
                                                src={item.image}
                                                alt={item.name}
                                            // width={300}
                                            // height={200}
                                            />
                                        </div>

                                        <div className='flex'>
                                            <div>
                                                <div>
                                                    <p className="font-bold text-sm  text-gray-800 flex">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-gray-800 text-[0.7rem] capitalize ">
                                                        {item.colors}
                                                    </p>
                                                    <p className='text-gray-800 text-[0.7rem]'>
                                                        {item.sizes}
                                                    </p>
                                                </div>

                                                <div className='flex flex-col'>
                                                    <p className=' font-semibold text-gray-800 text-[0.75rem]'>
                                                        {formatCurrency(item.price)}
                                                    </p>
                                                    <p className='text-sm font-semibold text-gray-800'>
                                                        {formatCurrency(item.qty * item.price)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="text-[0.9rem] w-[10rem] text-gray-500 p-2 ml-9">
                                                {/* <select name="itemQty" id="itemQty"
                                                    value={item.qty}
                                                    aria-label="Item Quantity"
                                                    onChange={(e) => dispatch({
                                                        type: REDUCER_ACTIONS.QUANTITY,
                                                        payload: { ...item, qty: Number(e.target.value) }
                                                    })}
                                                    className="ml-20 cursor-pointer outline-none"
                                                >
                                                    {options}
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <h2 className='mb-4'>CART TOTALS</h2>
                    <div className=' '>
                        <CartTotal />
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

        </div >
    )
}

export default Cart