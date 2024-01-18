import { InventoryType } from "@/data/inventory"
import { formatCurrency } from "@/utils/util";
import Link from "next/link";

interface Props {
    categoryProducts: InventoryType[] | undefined
}
const CategoryProduct = ({ categoryProducts }: Props) => {
    // console.log(categoryProducts);

    return (
        <div className="grid md:grid-cols-3  grid-cols-2 w-full ml-4 overflow-y-scroll">
            {categoryProducts?.map((item) => (
                <div >
                    <Link href={`/product/${item.id}/`}>
                        <img
                            className=" w-48 h-52  shadow"
                            src={item.image}
                            alt={item.name}
                        />
                    </Link >
                    <p className="font-semibold mt-2 text-sm md:text-base">
                        {item.name}
                    </p>
                    <div className="text-[0.9rem] w-[10rem] text-gray-300 font-semibold ">
                        {formatCurrency(item.price)}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryProduct