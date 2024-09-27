import { FaShoppingCart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface Prop {
    className?: string
    size?: number
}

export const IconCorazon = ({ className, size = 30 }: Prop) => (
    <IoHeart className={`${className}`} size={size} />
)
export const IconCarrito = ({ className, size = 30 }: Prop) => (
    <FaShoppingCart className={`${className}`} size={size} />
)
export const IconDelete = ({ className, size = 30 }: Prop) => (
    <MdDelete className={`${className}`} size={size} />
)