import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be positive"),
  floor: z.number().int().min(0),
  surface: z.number().positive("Surface must be positive"),
  boost_level: z.number().int(),
  min_duration: z.number().int().positive(),
  number_rooms: z.number().int().min(0),
  number_persons: z.number().int().min(1),
  is_ready: z.boolean(),
  is_negotiable: z.boolean(),
  location: z.object({
    latitude: z.string(),
    longitude: z.string(),        
    altitude: z.string(),
    zipCode: z.string(),
    cityId: z.string(),
    address: z.string().optional(),
  }),
  main_image: z.string().min(1, "Main image is required"),
  member_id: z.number().int(),
  rent_duration_id: z.number().int().positive("Rent duration is required"),
  type_id: z.number().int().positive("Property type is required"),
  features: z.array(z.number()),
  near_places: z.array(z.number()),
  images: z.array(z.string()),
});

export type PropertyFormValues = z.infer<typeof formSchema>;
