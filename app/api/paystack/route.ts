import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { amount, email } = req.body;

    try {
      // Make a request to Paystack to create a payment session using fetch
      const paystackResponse = await fetch(
        "https://api.paystack.co/transaction/initialize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            amount: amount * 100,
            currency: "NGN", // Paystack API expects amount in kobo
          }),
        }
      );

      if (paystackResponse.ok) {
        const responseData = await paystackResponse.json();
        return NextResponse.json({
          reference: responseData.data.reference,
          amount: responseData.data.amount,
        });
      } else {
        const errorMessage = await paystackResponse.text();
        const errorObject = JSON.parse(errorMessage); // Parse the error message into JSON
        return NextResponse.json({
          status: paystackResponse.status.toString(),
          error: errorObject,
        });
      }
    } catch (error) {
      console.error("Error creating Paystack session:", error);

      return new Response("An error occurred while processing your request.", {
        status: 500,
      });
    }
  } else {
    return NextResponse.json({ status: "405", error: "Method Not Allowed" });
  }
}
