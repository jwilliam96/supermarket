"use server"

import { registerSchema } from "@/validations/registerSchema";
import { signIn } from "@/auth.config";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs"
import { z } from "zod";

export type RegisterFormData = z.infer<typeof registerSchema>;

export const createUser = async (formData: RegisterFormData) => {

    try {

        const { confirmPassword, ...resto } = formData

        const data = resto

        data.email = data.email.toLowerCase()
        data.password = bcryptjs.hashSync(formData.password)

        await prisma.user.create({ data })

        return { ok: true }


    } catch (error) {
        console.log({ error })
        return { ok: false, message: "Correo ya existe" }

    }

}