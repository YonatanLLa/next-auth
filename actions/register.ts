"use server"

import * as z from "zod"
import { RegiterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegiterSchema>) => {

    const validateFields = RegiterSchema.safeParse(values)

    if (!validateFields.success) {
        return {
            error: "invalid filds!"
        }
    }

    return {success: "Email sent! "}
}