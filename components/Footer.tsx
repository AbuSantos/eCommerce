"use client"
import { Open_Sans } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import logo from "@/public/logo.png"
const openSans = Open_Sans({
    weight: "500",
    subsets: ['latin'],
    display: 'swap',

})
const Footer = () => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false);

    const onChange = (e: any) => {
        setEmail(e.target.value)
    }
    console.log(email);
    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault()

        try {
            const res = await fetch("api/newsletter", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email),
            })
            if (res.ok) {
                setEmail("")
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email', error);
        } finally {
            setLoading(false);
        }
    }

    const year: number = new Date().getFullYear()

    return (
        <div className="bg-yellow-50 p-5 text-gray-800 mt-28">
            <div className="grid md:grid-cols-2  mx-auto  max-w-5xl bg-yellow-500 rounded-lg p-3 -mt-28">
                <div className="logo flex items-center justify-center">
                    <Image src={logo} alt="Ruth Rich Design" className="w-48 h-48 md:w-60 md:h-60" />
                </div>
                <div className="content p-2 text-yellow-50">
                    <h1 className="font-semibold p-2 md:text-lg">
                        Subsribe to our   newsletter to get early access to our latest and exclusive designs</h1>
                    <p className="md:text-sm text-yellow-50 text-[0.8rem] ">
                        Get 20% off on your first order just by subscribing to our news letter
                    </p>

                    <div className=" border border-red-900 border-opacity-30 rounded-lg md:w-10/12 w-full flex items-center mt-4 mb-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "#ffffff", transform: "msFilter", margin: "3px 3px" }}><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                        <input
                            placeholder="Email" type="email"
                            value={email}
                            className="bg-transparent w-8/12 text-yellow-900 outline-none placeholder-yellow-50  "
                            onChange={onChange}
                        />
                        <button className="bg-gray-100 w-4/12 p-3 rounded-br-lg rounded-tr-lg text-sm font-semibold text-yellow-900 " onClick={handleSubmit}>
                            {loading ? "subscribing..." : "subscribe"}

                        </button>
                    </div>

                    <span className="text-[0.7rem] mt-5">you can unsubscribe anytime</span>
                </div>

            </div>
            <main className="md:flex   justify-between mx-auto max-w-7xl text-[0.8rem] mt-12  ">
                <div className={`${openSans.className} p-2 text-sm`}>
                    <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter", marginRight: "3px" }}><circle cx="12" cy="12" r="4"></circle><path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg> Dantata housing estate,kubwa </p>
                    <p className="ml-8 mb-2">Abuja,FCT, Nigeria</p>
                    <p className="flex mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter", marginRight: "3px" }}><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                        </svg>
                        09014456552
                    </p>
                    <p className="flex  mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter", marginRight: "3px" }}><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>

                        Ruthogolo7@gmail.com</p>
                    <div className="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: " rgba(0, 0, 0, 1)", transform: "msFilter" }}><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: " rgba(0, 0, 0, 1)", transform: "msFilter" }}><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: " rgba(0, 0, 0, 1)", transform: "msFilter" }}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                    </div>
                </div>
                <div className={`${openSans.className} p-2`}>
                    <h1 className="text-3xl">TERMS & CONDITION</h1>
                    <div className="text-sm mt-4">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Returns and Refunds</p>
                    </div>
                </div>
            </main>
            <p className="">Ruth Rich Designs: &copy; {year} </p>
        </div>
    )
}

export default Footer