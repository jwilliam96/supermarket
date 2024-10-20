import { z } from "zod"

export const addressSchema = z.object({
    name: z.string().nonempty({ message: "Name required" }).min(5, { message: "min 5 character" }),
    lastName: z.string().nonempty({ message: "LastName required" }).min(5, { message: "min 5 character" }),
    address: z.string().nonempty({ message: "address required" }),
    postalCode: z.string().regex(/^\d+$/, "El campo debe contener solo números"),
    addressOptional: z.string(),
    city: z.string().nonempty({ message: "City required" }).min(4, { message: "enter the valid city name" }),
    country: z.string().nonempty({ message: "Country required" }),
    phone: z.string().regex(/^\d+$/, "El campo debe contener solo números")
})