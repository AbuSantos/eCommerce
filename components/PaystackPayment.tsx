import useCart from "@/hooks/useCart";
import { useState } from "react";
import { Button } from "./ui/Button";
import ppaystack from "@/public/ppaystack.svg"
import next from "@/public/next.svg"
import Image from "next/image";

const PaystackPayment = () => {
    const [loading, setLoading] = useState(false);
    const { totalPriceNumber } = useCart();


    const handlePayment = async () => {
        setLoading(true);

        try {
            const amount = totalPriceNumber;
            const email = "abusomwansantos@gmail.com";

            const response = await fetch("/api/paystack/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount, email }),
            });

            if (response.ok) {
                const data = await response.json();
                const {  authorization_url } = data.reference.data;

                // console.log("Reference ID:", reference);
                // console.log("Transaction Amount:", amount);
                // console.log("Transaction url:", authorization_url);

                window.location.href = authorization_url;
            } else {
                console.error("Paystack API Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handlePayment} disabled={loading} className=" w-full bg-gray-900 p-3 text-[0.8rem] font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center space-x-2 ">
                <Image src={ppaystack} alt="" width={20} />
                <p className="">
                    {loading ? "Processing..." : "MAKE PAYMENT"}
                </p>
            </button>
        </div >
    );
};

export default PaystackPayment;
