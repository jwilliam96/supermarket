import { z } from "zod"

export const registerSchema = z.object({
    name: z.string()
        .min(1, { message: "Nombre de usuario requerido" })
        .min(6, { message: "Mínimo 6 caracteres" }),
    email: z.string()
        .min(1, { message: "Correo electrónico requerido" })
        .email({ message: "Correo electrónico invalido" }),
    password: z.string()
        .min(6, { message: "Mínimo 6 caracteres" }),
    confirmPassword: z.string()
        .min(1, { message: "Confirmar contraseña" })
}).refine(data => data.password === data.confirmPassword, { message: "Contraseñas no coinciden", path: ["confirmPassword"] })
