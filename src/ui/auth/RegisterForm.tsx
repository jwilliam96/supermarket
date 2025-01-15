"use client"

import { registerSchema } from "@/validations/registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { IconLogoCompleto } from "@/components"
import { useForm } from "react-hook-form"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import { z } from "zod"
import { createUser } from "@/actions"

type UserFormData = z.infer<typeof registerSchema>

export function RegisterForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>({ resolver: zodResolver(registerSchema) })

    const onSubmit = handleSubmit(async (data) => {

        await createUser(data)

        reset({
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    })

    return (
        <div className="max-w-[480px] w-full px-2 py-6 mx-auto">
            <form onSubmit={onSubmit} className="w-full">
                {/* lOGO  */}
                <Link href={"/"} >
                    <IconLogoCompleto className="w-full h-[55px] fill-red-500 mx-auto" />
                </Link>
                <h1 className="text-4xl font-bold mb-10 mt-8">Regístrate</h1>

                {/* NOMBRE DE USUARIO  */}
                <div className="flex flex-col">
                    <label htmlFor="userName" className="my-3">
                        Nombre de usuario
                    </label>
                    <input
                        id="userName"
                        {...register("userName")}
                        type="text"
                        className="border focus:outline-red-500 border-gray-400 rounded-md p-2 " />
                    {errors.userName && <span className="text-red-500 mt-1">{errors.userName.message} </span>}
                </div>

                {/* CORREO ELECTRÓNICO  */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="my-3">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        {...register("email")}
                        type="email"
                        className="border focus:outline-red-500 border-gray-400 rounded-md p-2 " />
                    {errors.email && <span className="text-red-500 mt-1">{errors.email?.message} </span>}
                </div>

                {/* CONTRASEÑA  */}
                <div className="flex flex-col">
                    <label htmlFor="password" className="my-3">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className="border focus:outline-red-500 border-gray-400 rounded-md p-2"
                    />
                    {errors.password && <span className="text-red-500 mt-1">{errors.password?.message} </span>}
                </div>

                {/* CONFIRMAR CONTRASEÑA  */}
                <div className="flex flex-col">
                    <label htmlFor="confirmPassword" className="my-3">
                        Confirmar Contraseña
                    </label>
                    <input
                        id="confirmPassword"
                        {...register("confirmPassword")}
                        type="password"
                        className="border focus:outline-red-500 border-gray-400 rounded-md p-2" />
                    {errors.confirmPassword && <span className="text-red-500 mt-1">{errors.confirmPassword?.message} </span>}
                </div>


                <button className="bg-red-500 text-white w-full py-2 mb-4 mt-8 rounded-md text-xl">Registrarme</button>
            </form>
            <div className="flex items-center justify-between my-4">
                {/* checkbox  */}
                <p>Ya tienes una cuenta?</p>
                <Link href={"/auth/login"} className="text-red-500 font-bold underline">Iniciar sesión</Link>
            </div>

            <div className="flex items-center justify-between my-8">
                <div className="bg-gray-500 w-full h-0.5 rounded-full" /> <p className="flex-shrink-0 px-8">O ingresar con</p> <div className="bg-gray-500 w-full h-0.5 rounded-full" />
            </div>

            {/* OTRA FORMA DE INGRESO  */}
            <div className="flex gap-8 my-10">
                {/* GOOGLE  */}
                <div className="flex items-center gap-2 border border-gray-400 bg-gray-50 w-full justify-center py-2 rounded-md">
                    <FcGoogle size={30} />
                    <p className="font-bold text-xl">Google</p>
                </div>

                {/* GITHUB */}
                <div className="flex items-center gap-2 border border-gray-400 bg-gray-50 w-full justify-center py-2 rounded-md">
                    <FaGithub size={30} />
                    <p className="font-bold text-xl">GitHub</p>
                </div>
            </div>
        </div>
    )
}
