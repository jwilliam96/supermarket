import { z } from "zod";

export const loginSchema = z.object({
    email: z.string()
        .min(1, { message: "Correo electrónico requerido" })
        .email({ message: "Correo electrónico invalido" }),
    password: z.string()
        .min(6, { message: "Mínimo 6 caracteres" }),
})