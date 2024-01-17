import { useState } from "react";

const PaystackPayment = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);

        try {
            const amount = 5000;
            const email = "test@gmail.com";

            const response = await fetch("/api/paystack", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount, email }),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle the data as needed (e.g., initiate Paystack modal)
                console.log("Paystack Response:", data);
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
            <button onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Make Payment"}
            </button>
        </div>
    );
};

export default PaystackPayment;
