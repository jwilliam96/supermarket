"use client"

import { signInGoogle } from "@/actions";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function ButtonLoginRedes() {

    const handleGoogle = async () => {
        await signInGoogle()
    }

    return (
        <div className="flex gap-8 my-10">

            {/* GOOGLE  */}
            <div
                onClick={handleGoogle}
                className="cursor-pointer flex items-center gap-2 border border-gray-400 bg-gray-50 w-full justify-center py-2 rounded-md">
                <FcGoogle size={30} />
                <p className="font-bold text-xl">Google</p>
            </div>

            {/* GITHUB */}
            <div className="flex items-center gap-2 border border-gray-400 bg-gray-50 w-full justify-center py-2 rounded-md">
                <FaGithub size={30} />
                <p className="font-bold text-xl">GitHub</p>
            </div>
        </div>
    )
}
