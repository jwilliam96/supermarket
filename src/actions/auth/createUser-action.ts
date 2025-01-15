"use server"

import { registerSchema } from "@/validations/registerSchema";
import { z } from "zod";

export type RegisterFormData = z.infer<typeof registerSchema>;

export const createUser = async (formData: RegisterFormData) => {


}