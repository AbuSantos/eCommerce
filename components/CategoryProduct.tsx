import { InventoryType } from "@/data/inventory"

interface Props {
    product: InventoryType | undefined
}
const CategoryProduct = ({product}:InventoryType) => {
  return (
    <div>CategoryProduct</div>
  )
}

export default CategoryProduct