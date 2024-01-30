"use client"
import Header from '@/components/Header'
import HeaderBlob from '@/components/HeaderBlob'
import NewArrival from '@/components/NewArrival'
import ProductList from '@/components/ProductList'
import SideCart from '@/components/SideCart'
import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';


export default function Home() {
    const toggleSideCart = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [openProducts, setOpenProducts] = useState(true)

    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0 });
    }, [openProducts]);

    // const handleToggleSideCart = () => {
    //     setIsOpen(!isOpen);
    // };

    const handleSwitchProducts = (newState: boolean) => {
        controls.start({ opacity: 0, y: 20 }).then(() => {
            setOpenProducts(newState);
        });
    };

    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeaderBlob openProducts={openProducts} setOpenProducts={setOpenProducts} />
            <SideCart isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='flex items-center justify-center space-x-3 p-3 mb-4'>
                <p onClick={() => handleSwitchProducts(false)} className={`cursor-pointer text-lg font-medium ${!openProducts ? "opacity-80 " : "opacity-30"}`}>New Arrival </p>
                <p onClick={() => handleSwitchProducts(true)} className={`cursor-pointer text-lg font-medium ${openProducts ? "opacity-80 " : "opacity-30 "}`}> Current Collections  </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {openProducts ? <ProductList /> : <NewArrival />}
            </motion.div>

        </>
    )

}
