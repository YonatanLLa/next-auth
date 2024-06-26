"use server";

import * as z from "zod";
import { RegiterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegiterSchema>) => {
  const validateFields = RegiterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "invalid filds!",
    };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUsuer = await getUserByEmail(email);
  if (existingUsuer) {
    return {
      error: "Email alredy in use",
    };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  //
  return { success: "Email sent! " };
};
