import { z } from "zod"

export const addressSchema = z.object({
    name: z.string().nonempty({ message: "" }).min(5, { message: "min 5 character" }),
    lastName: z.string().nonempty({ message: "" }).min(5, { message: "min 5 character" }),
    address: z.string().nonempty({ message: "" }),
    postalCode: z.string().nonempty({ message: "" }).regex(/^\d+$/, "Solo se admiten números"),
    addressOptional: z.string(),
    city: z.string().nonempty({ message: "" }).min(4, { message: "Ingrese un Nombre valido" }),
    country: z.string().nonempty({ message: "" }),
    phone: z.string().nonempty({ message: "" }).regex(/^\d+$/, "Solo se admiten números")
})