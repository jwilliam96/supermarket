"use server"

import { signIn } from "@/auth-config"


export const signInGoogle = async () => {
    await signIn("google")
}