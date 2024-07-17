import { z } from "zod";

export const loginObject = z.object({
  email: z
    .string({ required_error: "Please enter email" })
    .email({ message: "Please enter valid email" }),
  password: z
    .string({
      required_error: "Please enter password",
      description: "please enter",
    })
    .min(5, { message: "Password should be greater then 5 character" })
    .max(8, { message: "Password should be less then 8 character" }),
});

export type typeZLogin = z.infer<typeof loginObject>;
