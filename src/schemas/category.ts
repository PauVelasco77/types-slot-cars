import {z} from "zod";

const CATEGORIES = {
  CLASSIC_DTM: "Classic DTM",
  GROUP_C: "Group C",
  CLASSIC: "Classic",
  MODERN_GT: "Modern GT",
  GT_LMP: "GT LMP",
  RALLY: "Rally",
  RALLY_CLASSIC: "Rally Classic",
  RALLY_MODERN: "Rally Modern",
  LE_MANS: "Le Mans",
} as const;

const Category = z.object({
  id: z.string().uuid(),
  name: z.nativeEnum(CATEGORIES),
  description: z.string(),
});

type Category = z.infer<typeof Category>;

export type {Category};
export {CATEGORIES};
