"use client"

import { userSchema } from "@/validations/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type UserFormData = z.infer<typeof userSchema>

export default function Register() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>({ resolver: zodResolver(userSchema) })

    const onSubmit = handleSubmit(data => {
        reset({
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    })

    return (
        <form onSubmit={onSubmit} className="max-w-[500px] mx-auto px-4 py-8 border">
            <h2 className="text-xl text-center mb-4">Register</h2>

            <div className="grid gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="userName">userName</label>
                    <input {...register("userName")} type="text" id="userName" className="border py-2" />
                    {errors.userName && <span className="text-red-500">{errors.userName.message} </span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" id="email" className="border py-2" />
                    {errors.email && <span className="text-red-500">{errors.email.message} </span>}

                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id="password" className="border py-2" />
                    {errors.password && <span className="text-red-500">{errors.password.message} </span>}

                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword">confirmPassword</label>
                    <input {...register("confirmPassword")} type="password" id="confirmPassword" className="border py-2" />
                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message} </span>}
                </div>


                <button className="border py-2">Enviar</button>
            </div>

        </form>
    )
}
