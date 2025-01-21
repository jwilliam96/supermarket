"use server"

import { loginSchema } from "@/validations/loginSchema";
import { signIn } from "@/auth-config"
import { AuthError } from "next-auth";
import { z } from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

// LOGIN CREDENTIALS
export const signInCredentials = async (formData: LoginFormData) => {
    try {
        await signIn("credentials", formData)

    } catch (error) {

        if (error instanceof AuthError) {
            return error.cause?.err?.message
        }
        throw error
    }
}


// LOGIN GOOGLE
export const signInGoogle = async () => {

    await signIn("google")

}

