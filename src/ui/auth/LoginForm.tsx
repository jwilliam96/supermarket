"use client"

import { ButtonLoginRedes, IconLogoCompleto } from "@/components";
import { loginSchema } from "@/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { set, z } from "zod";
import { signInCredentials } from "@/actions";
import { useState } from "react";
import { useFormState } from "react-dom";


type UserFormData = z.infer<typeof loginSchema>

export function LoginForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>({ resolver: zodResolver(loginSchema) })

    const [errorValidate, setErrorValidate] = useState<string | null>(null)

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
                    <input
                        id="password"
                        type="text"
                        className="border focus:outline-red-500 border-gray-400 rounded-md p-2"
                        {...register("password")}
                    />
                    {errors.password && <span className="text-red-500 mt-1">{errors.password.message} </span>}
                    {errorValidate &&
                        <span className="text-red-500 mt-1">
                            {errorValidate}
                        </span>}
                </div>

                <div className="flex items-center justify-between">
                    {/* checkbox  */}
                    <div className="flex items-center">
                        <div className="size-6 border border-gray-500 mr-2 my-4 rounded-md" />
                        <p>Recordar</p>
                    </div>
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
