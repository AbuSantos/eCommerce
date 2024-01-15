import useCart from '@/hooks/useCart';
import React, { Dispatch, SetStateAction, useState } from 'react';
import CartLineItem from './CartLineItem';
import { useRouter } from 'next/navigation';
import { Button } from './ui/Button';
import Link from 'next/link';

type PropsType = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
const SideCart = ({ isOpen, setIsOpen }: PropsType) => {
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
    const route = useRouter();

    const toggleSideCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="relative">
                <div
                    className={`fixed top-0 right-0 bottom-0 min-h-screen h-full w-[23rem] bg-white transition-transform ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } text-black p-3 flex flex-col z-50`}
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`absolute top-3 -left-5 rounded-full w-12 h-12 cursor-pointer bg-white border border-gray-200 flex justify-center items-center hover:bg-gray-900 hover:border-gray-900 hover:text-gray-200 
                        ${isOpen ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300 ease-in-out`}
                    >
                        <span className="text-xl font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg>
                        </span>
                    </button>

                    <h3 className='font-bold text-center p-5'>my CART</h3>
                    <div className="flex-grow overflow-y-auto">
                        {cart.length === 0 ? (
                            <>
                                <div className='p-5 flex justify-center items-center flex-col'>
                                    <p className='text-center mb-4'>Cart is Empty</p>
                                    <button
                                        onClick={toggleSideCart}
                                        type="button"
                                        className="w-60 bg-gray-900 h-12 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </>
                        ) : (
                            <ul className='space-y-4'>
                                {cart.map((item, index) => (
                                    <CartLineItem
                                        key={index}
                                        item={item}
                                        dispatch={dispatch}
                                        REDUCER_ACTIONS={REDUCER_ACTIONS}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div className='mt-auto'>
                            <div className="total flex justify-between border-t-[0.3px] border-gray-400 p-2 ">
                                <p className='font-bold '>Total</p>
                                <p>{totalPrice}</p>
                            </div>

                            <div className='space-y-2'>
                                <Button variant="buy" onClick={() => route.push("/checkout")}>CHECKOUT</Button>
                                <Button variant="basket" onClick={() => route.push("/cart")} >VIEW CART</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SideCart;
