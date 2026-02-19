"use server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
});

export async function subscribeAction(formData: FormData) {
  console.log("Our first server action");
  const email = formData.get("email");
  console.log(email, "Our email input from form");

  const validatedFields = subscribeSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    console.dir(validatedFields.error.flatten().fieldErrors, { depth: null });

    return {
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }
}
