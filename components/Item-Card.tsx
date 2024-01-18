"use client"
import { useState } from "react"
import Image from "next/image"
import { InventoryType } from "@/data/inventory"

interface Props {
    product: InventoryType | undefined
}

export function ProductGallery({ product }: Props) {
    const zoomIn = (event: React.MouseEvent<HTMLDivElement>) => {
        // Get the image container and the product image
        const container = event.currentTarget;
        const img = container.querySelector('.main-image') as HTMLImageElement;

        // Calculate mouse position relative to the container
        const containerRect = container.getBoundingClientRect();
        const x = (event.clientX - containerRect.left) / containerRect.width;
        const y = (event.clientY - containerRect.top) / containerRect.height;

        // Set the scale factor for zooming
        const scale = 2;

        container.style.height = "95%"
        container.style.width = "370px"
        container.style.overflow = "hidden"
        container.style.cursor = "pointer"

        // Adjust transform origin and apply zoom effect
        img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        img.style.transform = `scale(${scale})`;
        img.style.transition = "transform 0.6s ease-in-out"

    };

    const resetZoom = (event: React.MouseEvent<HTMLDivElement>) => {
        // Get the product image
        const img = event.currentTarget.querySelector('.main-image') as HTMLImageElement;

        // Reset transform origin and zoom to normal state
        img.style.transformOrigin = '50% 50%';
        img.style.transform = 'scale(1)';
    };
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div className="flex flex-col-reverse">
            {/* Image Grid */}
            <div className="mx-auto mt-6 w-full max-w-2xl  lg:max-w-none">
                <ul className="grid grid-cols-4 gap-6">
                    {product?.images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className="relative flex h-20 md:h-24 w-full cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50 
                            md:ml-0 ml-5"
                        >
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                                <img
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </span>
                            {index === selectedImage && <span
                                className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-blue-500 ring-offset-2"
                                aria-hidden="true"
                            />}
                        </div>
                    ))}
                </ul>
            </div>

            {/* Main Image */}
            <div className="aspect-h-1 aspect-w-1 w-full ml-4 md:ml-0" onMouseMove={(event) => zoomIn(event)} onMouseLeave={(event) => resetZoom(event)} >
                <img
                    src={product?.images[selectedImage]}
                    alt={`main ${product?.name} image`}
                    className=" object-cover object-center shadow-sm dark:border-gray-800 w-[370px] h-[450px] main-image"
                />
            </div>
        </div>
    )
}
