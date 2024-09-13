import { IoHeart } from "react-icons/io5";

interface Prop {
    className?: string
    size?: number
}

export const IconCorazon = ({ className, size = 30 }: Prop) => (
    <IoHeart className={`${className}`} size={size} />
)