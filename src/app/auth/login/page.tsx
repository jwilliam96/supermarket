import ImageLogin from "/public/auth/login.jpg"
import { LoginForm } from "@/ui";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className=" grid grid-cols-2 place-content-center max-w-[1600px] mx-auto px-10">

            <figure className="relative">
                <div className="absolute bg-black bg-opacity-20 inset-0" />
                <Image src={ImageLogin} alt="supermarket" className="object-cover" />
            </figure>

            <div className="flex justify-center items-center">
                <LoginForm />
            </div>
        </div>
    )
}
