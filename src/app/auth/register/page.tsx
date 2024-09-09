import Register from "@/ui/form/Register";
import imageRegister from "/public/auth/register.jpg"
import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="min-h-screen grid grid-cols-2 place-content-center max-w-[1600px] mx-auto px-10">
            <figure className="relative">
                <div className="absolute bg-black bg-opacity-10 inset-0" />
                <Image src={imageRegister} alt="supermarket" className="object-cover" />
            </figure>
            <Register />
        </div>
    );
}