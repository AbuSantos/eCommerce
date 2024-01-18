"use client"
import BreadCrumps from "@/components/ui/BreadCrumps";
import { usePathname } from "next/navigation";

const page = () => {
    const router = usePathname()
    const isOrder = router.includes('/order');
    return (
        <div>
            < BreadCrumps isOrder={isOrder} />
            page
        </div>
    )
}

export default page