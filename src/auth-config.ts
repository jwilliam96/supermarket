import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
    ],
})