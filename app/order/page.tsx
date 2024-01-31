"use client"
import BreadCrumps from "@/components/ui/BreadCrumps";
import { usePathname } from "next/navigation";

const Page = () => {
    const router = usePathname()
    const isOrder = router.includes('/order');
    return (
        <div>
            < BreadCrumps isOrder={isOrder} />
            successfully paid
        </div>
    )
}

export default Page