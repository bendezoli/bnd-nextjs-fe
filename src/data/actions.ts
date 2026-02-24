"use server";
import { z } from "zod";
import { subscribeService } from "./services";
import { error } from "console";

const subscribeSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
});

export async function subscribeAction(prevState: any, formData: FormData) {
  const email = formData.get("email");

  const validatedFields = subscribeSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    console.dir(validatedFields.error.flatten().fieldErrors, { depth: null });

    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }

  const respoonseData = await subscribeService(validatedFields.data.email);

  if (!respoonseData) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      errorMessage:
        "Ops! SOmething went wrong while connecting to the subscription service. Please try again later.",
    };
  }

  if (respoonseData.error) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: respoonseData.error,
      errorMessage:
        "An error occurred while subscribing. Please try again later.",
    };
  }

  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: "Thank you for subscribing to our newsletter!",
  };
}
