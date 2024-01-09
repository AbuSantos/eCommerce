import React from 'react';
{/* <table classNameName="w-full text-sm text-left rtl:text-right text-blue-100 ml-5 ">
                <thead classNameName="text-xs text-white uppercase bg-blue-600 ">
                    <tr >
                        <th classNameName='px-2 py-6 bg-blue-500'>UK</th>
                        <th classNameName='px-2 py-6'>US</th>
                        <th classNameName='px-2 py-6'>EU</th>
                        <th classNameName='px-2 py-6'>BUST</th>
                        <th classNameName='px-2 py-6'>WAIST</th>
                        <th classNameName='px-2 py-6'>HIP</th>
                    </tr>
                </thead>
                <tbody classNameName='p-10'>
                    {sizeData.map((size, index) => (
                        <tr key={index} classNameName="bg-blue-600 border-b border-blue-400">
                            <td>{size.uk}</td>
                            <td>{size.us}</td>
                            <td>{size.eu}</td>
                            <td>{size.bust}</td>
                            <td>{size.waist}</td>
                            <td>{size.hip}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
const SizeGuide = () => {
    // Sample data
    const sizeData = [
        { uk: 6, us: 2, eu: 34, bust: 32, waist: 25, hip: 36 },
        { uk: 8, us: 4, eu: 36, bust: 34, waist: 27, hip: 38 },
        { uk: 10, us: 6, eu: 38, bust: 36, waist: 29, hip: 40 },
        { uk: 12, us: 8, eu: 40, bust: 38, waist: 31, hip: 42 },
        { uk: 14, us: 10, eu: 42, bust: 41, waist: 34, hip: 45 },
        { uk: 16, us: 12, eu: 44, bust: 43, waist: 36, hip: 47 },
        { uk: 18, us: 14, eu: 46, bust: 46, waist: 38, hip: 50 },
        { uk: 20, us: 16, eu: 48, bust: 48, waist: 42, hip: 54 },
    ];

    const lengths: string[] = [

        "32.5-33", "33.5-36", "36.5-40", "40.5-44"
    ]

    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <p className="text-sm text-gray-300">cant find your style,please send us a message with your customized sizes</p>
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Length
                        </th>
                        <th scope="col" className="px-6 py-3">
                            WAIST
                        </th>
                        <th scope="col" className="px-6 py-3">
                            HIP
                        </th>
                        <th scope="col" className="px-6 py-3">
                            BUST
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <td scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            SMALL
                        </td>
                        {
                            lengths.map((lent) => <>
                                <td className="px-4 py-3">{lent}</td>
                            </>)
                        }
                    </tr>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            MEDIUM
                        </th>
                        {
                            lengths.map((lent) => <>
                                <td className="px-4 py-3">{lent}</td>
                            </>)
                        }
                    </tr>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            LARGE
                        </th>
                        {
                            lengths.map((lent) => <>
                                <td className="px-4 py-3">{lent}</td>
                            </>)
                        }
                    </tr>
                    <tr className="bg-blue-500 border-b border-blue-400">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            X-LARGE
                        </th>
                        {
                            lengths.map((lent) => <>
                                <td className="px-4 py-3">{lent}</td>
                            </>)
                        }
                    </tr>
                    <tr className="bg-blue-500 border-blue-40">
                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                            XX-LARGE
                        </th>
                        {
                            lengths.map((lent) => <>
                                <td className="px-4 py-3">{lent}</td>
                            </>)
                        }
                    </tr>
                </tbody>
            </table>
        </div>

    )
};

export default SizeGuide;
