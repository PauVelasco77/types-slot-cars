import {z} from "zod";
import {CATEGORIES} from "./category";

type PerspectiveType =
  | "diagonal_front_left"
  | "diagonal_front_right"
  | "diagonal_rear_left"
  | "diagonal_rear_right"
  | "front"
  | "rear"
  | "left"
  | "right";

type ImageViewType = "perspective" | "flat";

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
    perspective_diagonal_front_left: z.string().url().optional(),
    perspective_diagonal_front_right: z.string().url().optional(),
    perspective_diagonal_rear_left: z.string().url().optional(),
    perspective_diagonal_rear_right: z.string().url().optional(),
    perspective_front: z.string().url().optional(),
    perspective_rear: z.string().url().optional(),
    perspective_left: z.string().url().optional(),
    perspective_right: z.string().url().optional(),
    flat_diagonal_front_left: z.string().url().optional(),
    flat_diagonal_front_right: z.string().url().optional(),
    flat_diagonal_rear_left: z.string().url().optional(),
    flat_diagonal_rear_right: z.string().url().optional(),
    flat_front: z.string().url().optional(),
    flat_rear: z.string().url().optional(),
    flat_left: z.string().url().optional(),
    flat_right: z.string().url().optional(),
  }),
  category: z.array(z.nativeEnum(CATEGORIES)).nonempty(),
});

type ImageKey = `${ImageViewType}_${PerspectiveType}`;
type Car = z.infer<typeof CarSchema>;
type Scale = keyof typeof SCALES;

export type {Scale, Car, ImageKey};
export {CarSchema};
