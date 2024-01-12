import React from 'react';

const SizeGuide = () => {
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
