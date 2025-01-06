import ImageLogin from "/public/auth/login.jpg"
import { LoginForm } from "@/ui";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className=" grid w-full max-w-[1600px] px-4 py-6 md:px-10 md:grid-cols-2 gap-10 ">

            <figure className="relative hidden md:block">
                <div className="absolute bg-black bg-opacity-20 inset-0" />
                <Image src={ImageLogin} alt="supermarket" className="object-cover h-full" priority />
            </figure>

            <LoginForm />
        </div>
    )
}
