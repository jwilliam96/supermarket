"use client"

import { ButtonLoginRedes, IconEye, IconEyeSlash, IconLogoCompleto } from "@/components";
import { loginSchema } from "@/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInCredentials } from "@/actions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { z } from "zod";


type UserFormData = z.infer<typeof loginSchema>

export function LoginForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>({ resolver: zodResolver(loginSchema) })

    const [errorValidate, setErrorValidate] = useState<string | null>(null)
    const [isView, setIsView] = useState<boolean>(false)

    const onSubmit = handleSubmit(async (data) => {

        const validateUser = await signInCredentials(data)

        if (validateUser) {
            setErrorValidate(validateUser)
        }

    })


    return (
        <div className="max-w-[480px] w-full px-2 py-6 mx-auto">
            <form onSubmit={onSubmit} className="w-full">
                {/* lOGO  */}
                <Link href={"/"} >
                    <IconLogoCompleto className="w-full h-[55px] fill-red-500 mx-auto" />
                </Link>
                <h1 className="text-4xl font-bold mb-10 mt-8">Iniciar Sesión</h1>

                {/* EMAIL  */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="my-3">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        type="text"
                        className="border focus:outline-red-500 border-gray-400 rounded-md p-2 "
                        {...register("email")}
                    />
                    {errors.email && <span className="text-red-500 mt-1">{errors.email.message} </span>}
                </div>

                {/* PASSWORD  */}
                <div className="flex flex-col">
                    <label htmlFor="password" className="my-3">
                        Contraseña
                    </label>
                    <div className="flex relative items-center">
                        <input
                            id="password"
                            type={isView ? "text" : "password"}
                            className="border focus:outline-red-500 border-gray-400 rounded-md p-2 w-full"
                            {...register("password")}
                        />
                        {
                            isView ?
                                (
                                    <div onClick={() => setIsView(!isView)} className="flex items-center cursor-pointer">
                                        <IconEye className="absolute right-6" />
                                    </div>
                                ) :
                                (
                                    <div onClick={() => setIsView(!isView)} className="flex items-center cursor-pointer">
                                        <IconEyeSlash className="absolute right-6 text-gray-500" />
                                    </div>
                                )
                        }
                    </div>
                    {errors.password && <span className="text-red-500 mt-1">{errors.password.message} </span>}
                    {errorValidate &&
                        <span className="text-red-500 mt-1">
                            {errorValidate}
                        </span>}
                </div>

                <div className="flex items-center justify-between">
                    {/* checkbox  */}
                    <p className=" my-4 ">Eres nuevo?</p>
                    <Link href={"/auth/register"} className="text-red-500 font-bold underline ">Registrarme</Link>
                </div>

                <button className="bg-red-500 text-white w-full py-2 my-4 rounded-md text-xl">Ingresar</button>
            </form>

            <div className="flex items-center justify-between my-6">
                <div className="bg-gray-500 w-full h-0.5 rounded-full" /> <p className="flex-shrink-0 px-8">O ingresar con</p> <div className="bg-gray-500 w-full h-0.5 rounded-full" />
            </div>

            {/* OTRA FORMA DE INGRESO  */}
            <ButtonLoginRedes />

        </div>
    )
}
