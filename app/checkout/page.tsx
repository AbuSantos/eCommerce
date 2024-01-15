"use client"
import AddressForm from '@/components/AddressForm'
import BreadCrumps from '@/components/ui/BreadCrumps'
import { usePathname } from 'next/navigation'
import React from 'react'

const CheckOut = () => {
    const router = usePathname()
    const isCheckOut = router.includes('/checkout');
    console.log(isCheckOut);

    return (
        <div>
            < BreadCrumps isCheckOut={isCheckOut} />
            <AddressForm/>
        </div>
    )
}

export default CheckOut