import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import prisma from "./lib/prisma"
import NextAuth from "next-auth"
import bcryptjs from "bcryptjs"
import { z } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/auth/login",
    },
    providers: [
        Google,
        Credentials({
            async authorize(credentials) {
                const parseCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials)

                if (!parseCredentials.success) return null

                const { email, password } = parseCredentials.data

                const user = await prisma.user.findUnique({
                    where: { email: email.toLocaleLowerCase() }
                })

                if (!user) throw new Error("Correo no existe")

                if (!bcryptjs.compareSync(password, user.password ?? "")) {
                    throw new Error("Contraseña invalida")
                }

                const { password: _, ...resto } = user

                return resto
            },
        })
    ],


})