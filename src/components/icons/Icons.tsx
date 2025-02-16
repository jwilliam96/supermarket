import { FaEye, FaEyeSlash, FaShoppingCart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart, IoMenu } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface Prop {
    className?: string
    size?: number
}

export const IconCorazonLleno = ({ className, size = 30 }: Prop) => (
    <IoHeart className={`${className}`} size={size} />
)
export const IconCorazon = ({ className, size = 30 }: Prop) => (
    <IoMdHeartEmpty className={`${className}`} size={size} />
)
export const IconCarrito = ({ className, size = 30 }: Prop) => (
    <FaShoppingCart className={`${className}`} size={size} />
)
export const IconDelete = ({ className, size = 30 }: Prop) => (
    <MdDelete className={`${className}`} size={size} />
)
export const IconMenu = ({ className, size = 30 }: Prop) => (
    <IoMenu className={`${className}`} size={size} />
)
export const IconEye = ({ className, size = 30 }: Prop) => (
    <FaEye className={`${className}`} size={size} />
)
export const IconEyeSlash = ({ className, size = 30 }: Prop) => (
    <FaEyeSlash className={`${className}`} size={size} />
)
