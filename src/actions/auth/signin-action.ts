"use server"

import { loginSchema } from "@/validations/loginSchema";
import { signIn } from "@/auth-config"
import { AuthError } from "next-auth";
import { z } from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

export const signInCredentials = async (data: LoginFormData) => {
    try {
        await signIn("credentials", data)
    } catch (error) {

        if (error instanceof AuthError) {
            return error.cause?.err?.message
        }
        throw error
    }
}

export const signInGoogle = async () => {
    try {
        await signIn("google")
    } catch (error) {
        console.log(error)
    }
}

