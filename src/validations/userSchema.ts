import { z } from "zod"

export const userSchema = z.object({
    userName: z.string({ message: "User name required" }).min(6, { message: "min 6 character" }),
    email: z.string({ message: "Email required" }).email({ message: "Email invalid" }),
    password: z.string({ message: "Password required" }).min(6, { message: "min 6 character" }),
    confirmPassword: z.string({ message: "Confirm Password required" })
}).refine(data => data.password === data.confirmPassword, { message: "password must match", path: ["confirmPassword"] })
