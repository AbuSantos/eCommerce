import { InventoryType } from "@/data/inventory"
import { formatCurrency } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

interface Props {
    categoryProducts: InventoryType[] | undefined
}
const CategoryProduct = ({ categoryProducts }: Props) => {
    // console.log(categoryProducts);

    return (
        <div className="flex flex-no-wrap overflow-x-auto h-80 ">
            {categoryProducts?.map((item, index) => (
                <div
                    key={index}
                    // className=" h-20 md:h-64 w-56 cursor-pointer rounded-md text-sm font-medium ml-5"
                    className="flex-shrink-0 w-56 h-56  mr-4"
                >
                    <Link href={`/product/${item.id}/`} className="0">
                        <Image
                            width={100}
                            height={100}
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full "
                        />

                    </Link >
                    <p className="font-semibold mt-2 text-sm md:text-base text-gray-800">
                        {item.name}
                    </p>
                    <div className="text-[0.9rem] w-[10rem] text-gray-800 font-semibold ">
                        {formatCurrency(item.price)}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CategoryProduct