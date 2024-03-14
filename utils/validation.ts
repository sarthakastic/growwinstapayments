import { z } from "zod";

export const PromoCodeSchema = z.object({
  promocode: z
    .string()
    .min(8, { message: "Promocode must be of minimum 1 letter" }),
});

export const AddressSchema = z.object({
  addressLine1: z
    .string()
    .min(1, { message: "House Number must be of minimum 1 letter" }),
  addressLine2: z
    .string()
    .min(1, { message: "Locality must be of minimum 1 letter" }),
  city: z.string().min(1, { message: "City must be of minimum 1 letter" }),
  state: z.string().min(1, { message: "State must be of minimum 1 letter" }),
  pincode: z
    .string()
    .min(1, { message: "Pincode must be of minimum 1 letter" }),
});

const phoneRegex = new RegExp("^[6-9][0-9]{9}");

const PhoneSchema = z
  .string({ invalid_type_error: "Number is required" })
  .regex(phoneRegex, "Invalid Number!");

export const PhoneNumberSchema = z.object({
  phone: PhoneSchema,
});
