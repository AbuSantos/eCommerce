import { InventoryType, inventory } from "@/data/inventory"
import { getSizeName } from "@/utils/util"
import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "./Button"
import SizeGuide from "./SizeGuide"
import useCart from "@/hooks/useCart"

type PropsType = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    product: InventoryType
}

const Modal = ({ isOpen, setIsOpen, product }: PropsType) => {
    const items: InventoryType | undefined = inventory.find(item => item.id === product.id);
    const { name, description, price, sizes, colors } = items
    const [selectSize, setSelectedSize] = useState<string>(sizes[0])
    const [selectColor, setSelectedColor] = useState<string>(colors[0])
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()



    return (
        <div aria-hidden="true" className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Style Guide
                        </h3>


                        <button type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4">
                        <div className="mt-4">
                            <p>
                                Available Sizes: <strong>{getSizeName(selectSize)}</strong>
                            </p>
                            {sizes.map((size: string | undefined) => (
                                <Button
                                    onClick={() => {
                                        // addSize()
                                        setSelectedSize(size)
                                    }}
                                    variant={selectSize === size ? "outline" : "default"}
                                    key={size} className="mr-2 mt-4">
                                    {getSizeName(size)}
                                </Button>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p>
                                Available colors: <strong>{selectColor}</strong>
                            </p>
                            {colors.map((color: string | undefined) => (
                                <Button
                                    onClick={() => {
                                        setSelectedColor(color)
                                    }}
                                    variant={selectColor === color ? "outline" : "default"}
                                    key={color} className="mr-2 mt-4">
                                    {color}
                                </Button>
                            ))}
                        </div>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white border-t-[0.5px] border-gray-600 pt-3">
                            RR Style Guide
                        </p>
                        <span className="text-sm">all sizes are in inches</span>


                    </div>
                    <div >
                        <SizeGuide />
                    </div>
                    <div className="border-t-[2px] border-gray-500 flex justify-around p-4 space-x-2 pt-4">
                        <button className="w-1/2 bg-blue-500 py-4 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:none outline-none">
                            get more
                        </button>
                        <button className="w-1/2 bg-black py-3 text-sm font-medium  text-smtext-white focus:outline-none focus:ring-2 focus:none outline-none">
                            ADD TO CART
                        </button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal