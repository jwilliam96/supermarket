import { z } from "zod"

export const addressSchema = z.object({
    name: z.string({ message: "Name required" }).min(5, { message: "min 5 character" }),
    lastName: z.string({ message: "LastName required" }).min(5, { message: "min 5 character" }),
    address: z.string({ message: "address required" }),
    postalCode: z.string(),
    addressOptional: z.string(),
    city: z.string({ message: "City required" }).min(4, { message: "enter the valid city name" }),
    country: z.string({ message: "Country required" }),
    phone: z.string().regex(/^\d+$/, "El campo debe contener solo números")
})