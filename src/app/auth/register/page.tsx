import imageRegister from "/public/auth/register.webp"
import { RegisterForm } from "@/ui";
import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className=" grid w-full max-w-[1600px] px-4 py-6 md:px-10 md:grid-cols-2 gap-10 ">

            <figure className="relative hidden md:flex md:justify-center">
                <Image src={imageRegister} height={700} alt="supermarket" className="object-cover h-full bg-center" priority />
            </figure>

            <RegisterForm />
        </div>
    );
}