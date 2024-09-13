import Login from "@/ui/form/Login";
import Image from "next/image";
import ImageLogin from "/public/auth/login.jpg"

export default function LoginPage() {
    return (
        <div className="min-h-screen grid grid-cols-2 place-content-center max-w-[1600px] mx-auto px-10">
            <div className="flex justify-center items-center">
                <Login />
            </div>
            <figure className="relative">
                <div className="absolute bg-black bg-opacity-20 inset-0" />
                <Image src={ImageLogin} alt="supermarket" className="object-cover" />
            </figure>
        </div>
    )
}
