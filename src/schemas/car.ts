import {z} from "zod";
import {CATEGORIES} from "./category";

type PerspectiveType = "front" | "rear" | "left" | "right" | "front_left" | "front_right" | "rear_left" | "rear_right";

const SCALES = {"1:24": "1:24", "1:32": "1:32"};

const CarSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  make: z.string(),
  model: z.string(),
  brand: z.string(),
  description: z.string().optional(),
  year: z.number().int().min(1886).max(new Date().getFullYear()),
  reference: z.string(),
  scale: z.nativeEnum(SCALES),
  images: z.object({
    perspective: z.object({
      front: z.string().url().optional(),
      rear: z.string().url().optional(),
      left: z.string().url().optional(),
      right: z.string().url().optional(),
      front_left: z.string().url().optional(),
      front_right: z.string().url().optional(),
      rear_left: z.string().url().optional(),
      rear_right: z.string().url().optional(),
      others: z.array(z.string().url()).optional(),
    }),
    flat: z.object({
      front: z.string().url().optional(),
      rear: z.string().url().optional(),
      left: z.string().url().optional(),
      right: z.string().url().optional(),
      front_left: z.string().url().optional(),
      front_right: z.string().url().optional(),
      rear_left: z.string().url().optional(),
      rear_right: z.string().url().optional(),
      others: z.array(z.string().url()).optional(),
    }),
    renders: z.object({
      front: z.string().url().optional(),
      rear: z.string().url().optional(),
      left: z.string().url().optional(),
      right: z.string().url().optional(),
      front_left: z.string().url().optional(),
      front_right: z.string().url().optional(),
      rear_left: z.string().url().optional(),
      rear_right: z.string().url().optional(),
      others: z.array(z.string().url()).optional(),
    }),
    draw: z.object({
      front: z.string().url().optional(),
      rear: z.string().url().optional(),
      left: z.string().url().optional(),
      right: z.string().url().optional(),
      front_left: z.string().url().optional(),
      front_right: z.string().url().optional(),
      rear_left: z.string().url().optional(),
      rear_right: z.string().url().optional(),
      others: z.array(z.string().url()).optional(),
    }),
    real: z.object({
      front: z.string().url().optional(),
      rear: z.string().url().optional(),
      left: z.string().url().optional(),
      right: z.string().url().optional(),
      front_left: z.string().url().optional(),
      front_right: z.string().url().optional(),
      rear_left: z.string().url().optional(),
      rear_right: z.string().url().optional(),
      others: z.array(z.string().url()).optional(),
    }),
  }),
  category: z.array(z.nativeEnum(CATEGORIES)).nonempty(),
});

type Car = z.infer<typeof CarSchema>;
type Scale = keyof typeof SCALES;

export type {Scale, Car};
export {CarSchema};
