import { z } from "zod";

export const PromoCodeSchema = z.object({
  promocode: z
    .string()
    .min(8, { message: "Promocode must be of minimum 8 letters" }),
});

export const AddressSchema = z.object({
  addressLine1: z.string(),
  addressLine2: z.string(),
  city: z.string(),
  state: z.string(),
  pincode: z.string(),
});

const phoneRegex = new RegExp("^[6-9][0-9]{9}");

const PhoneSchema = z
  .string({ invalid_type_error: "Number is required" })
  .regex(phoneRegex, "Invalid Number!");

export const PhoneNumberSchema = z.object({
  phone: PhoneSchema,
});
