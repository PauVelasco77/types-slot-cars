import {z} from "zod";
import {CATEGORIES} from "./category";

type PerspectiveType = "front" | "rear" | "left" | "right" | "front_left" | "front_right" | "rear_left" | "rear_right";

const SCALES = {"1_24": "1:24", "1_32": "1:32"};

const PerspectiveSchema = z.object({
  front: z.string().url().optional(),
  rear: z.string().url().optional(),
  left: z.string().url().optional(),
  right: z.string().url().optional(),
  front_left: z.string().url().optional(),
  front_right: z.string().url().optional(),
  rear_left: z.string().url().optional(),
  rear_right: z.string().url().optional(),
  others: z.array(z.string().url()).optional(),
});

type ImageType = "perspective" | "flat" | "renders" | "draw" | "real";

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
    perspective: PerspectiveSchema.optional(),
    flat: PerspectiveSchema.optional(),
    renders: PerspectiveSchema.optional(),
    draw: PerspectiveSchema.optional(),
    real: PerspectiveSchema.optional(),
    scenary: z.array(z.string().url()).optional(),
    other: z.array(z.string().url()).optional(),
  }),
  category: z.array(z.nativeEnum(CATEGORIES)).nonempty(),
});

type Car = z.infer<typeof CarSchema>;
type Scale = keyof typeof SCALES;
type Perspective = z.infer<typeof PerspectiveSchema>;

export type {Scale, Car, PerspectiveType, ImageType, Perspective};
export {CarSchema, PerspectiveSchema};
