import React from 'react';

const SizeGuide = () => {
    const bust: string[] = [
        "32", "34", "36", "38", "41", "43", "46", "49", "52"
    ]
    const waist: string[] = [
        "24", "26", "28", "30", "33", "36", "39", "42", "45"
    ]
    const hips: string[] = [
        "36", "38", "40", "42", "45", "48", "51", "54", "57"
    ]
    const sizes: string[] = [
        "6", "8", "10", "12", "14", "16", "18", "20", "29"
    ]

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className='text-gray-800 p-4 font-semibold '>SIZE GUIDE</h1>
            <p className="text-sm text-gray-600 p-2">For customized sizes, please contact us</p>
            <table className="w-full text-sm text-left rtl:text-right text-blue-800 ">
                <tbody>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            SIZES
                        </th>
                        {
                            sizes.map((size, index) => (
                                <td key={index} className="px-4 py-3">{size}</td>
                            ))
                        }
                    </tr>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            BUST
                        </th>
                        {
                            bust.map((lent, index) => (
                                <td key={index} className="px-4 py-3">{lent}</td>
                            ))
                        }
                    </tr>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            WAIST
                        </th>
                        {
                            waist.map((lent, index) => (
                                <td key={index} className="px-4 py-3">{lent}</td>
                            ))
                        }
                    </tr>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            HIPS
                        </th>
                        {
                            hips.map((lent, index) => (
                                <td key={index} className="px-4 py-3">{lent}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>

    )
};

export default SizeGuide;
