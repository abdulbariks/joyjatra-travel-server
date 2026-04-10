import { z } from "zod";

export const createBlogZodSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(3, "Title must be at least 3 characters"),

  location: z
    .string()
    .min(1, "Location is required")
    .min(2, "Location must be at least 2 characters"),

  description: z.string().optional(),

  content: z.string().optional(),

  imageUrl: z.string().url("Image must be a valid URL").optional(),
});
