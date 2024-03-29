// import { InventoryType, inventory } from "@/data/inventory"
// import { getSizeName } from "@/utils/util"
// import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
// import { Button } from "./Button"
// import SizeGuide from "./SizeGuide"
// import useCart from "@/hooks/useCart"
// import { CartItemType } from "@/context/CartProvider"

// type PropsType = {
//     isOpen: boolean,
//     setIsOpen: Dispatch<SetStateAction<boolean>>,
//     product: CartItemType
// }

// const Modal = ({ isOpen, setIsOpen, product }: PropsType) => {
//     const items = inventory.find(item => item.id === product.id);
//     const { name, description, price, sizes, colors, qty } = items
//     const [selectSize, setSelectedSize] = useState<string>(sizes[0])
//     const [selectColor, setSelectedColor] = useState<string>(colors[0])
//     const [itemQuantity, setItemQuantity] = useState<number>(qty)
//     const { dispatch, REDUCER_ACTIONS, cart } = useCart()

//     const addTCart = () => {
//         console.log('Before dispatch:', itemQuantity, product.qty)
//         dispatch({
//             type: REDUCER_ACTIONS.ADD, payload:
//             {
//                 ...product,
//                 sizes: selectSize,
//                 colors: selectColor,
//             }
//         })
//         setIsOpen(false)
//     }

//     const onChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
//         dispatch({
//             type: REDUCER_ACTIONS.QUANTITY, payload:
//             {
//                 ...product, qty: Number(e.target.value)
//             }
//         })
//     }


//     return (
//         <div aria-hidden="true" className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-60">
//             <div className="relative p-4 w-full max-w-2xl max-h-full">
//                 <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                             Style Guide
//                         </h3>


//                         <button type="button"
//                             onClick={() => setIsOpen(false)}
//                             className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
//                             <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
//                             </svg>
//                             <span className="sr-only">Close modal</span>
//                         </button>
//                     </div>

//                     <div className="p-4 md:p-5 space-y-4">
//                         <div className="mt-4">
//                             <p>
//                                 Available Sizes: <strong>{getSizeName(selectSize)}</strong>
//                             </p>
//                             {sizes.map((size: string | undefined) => (
//                                 <Button
//                                     onClick={() => {
//                                         // addSize()
//                                         setSelectedSize(size)
//                                     }}
//                                     variant={selectSize === size ? "outline" : "default"}
//                                     key={size} className="mr-2 mt-4">
//                                     {getSizeName(size)}
//                                 </Button>
//                             ))}
//                         </div>
//                         <div className="mt-4">
//                             <p>
//                                 Available colors: <strong>{selectColor}</strong>
//                             </p>
//                             {colors.map((color: string | undefined) => (
//                                 <Button
//                                     onClick={() => {
//                                         setSelectedColor(color)
//                                     }}
//                                     variant={selectColor === color ? "outline" : "default"}
//                                     key={color} className="mr-2 mt-4">
//                                     {color}
//                                 </Button>
//                             ))}
//                         </div>
//                         <p className="text-xl font-semibold text-gray-900 dark:text-white border-t-[0.5px] border-gray-600 pt-3">
//                             RR Style Guide
//                         </p>
//                         <span className="text-sm">all sizes are in inches</span>


//                     </div>
//                     <div >
//                         {/* <SizeGuide /> */}
//                     </div>
//                     <div className="border-t-[2px] border-gray-500  p-4 pt-4">
//                         <label htmlFor={`quantity-${product.id}`} className="sr-only">
//                             Quantity, {product.name}
//                         </label>
//                         <input
//                             id={`quantity-${product.id}`}
//                             name={`quantity-${product.id}`}
//                             type="number"
//                             className="w-16 text-black text-center outline-none h-11"
//                             min={1}
//                             max={10}
//                             value={itemQuantity}
//                             placeholder="1"
//                             onChange={onChangeQty}
//                         />

//                         <button
//                             onClick={addTCart}
//                             className="w-1/2 h-11 bg-black py-3 text-sm font-medium  text-smtext-white focus:outline-none focus:ring-2 focus:none outline-none">
//                             ADD TO CART
//                         </button>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Modal