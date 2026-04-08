import * as z from "zod";

export const BarEn101Schema = z.object({
    zone: z.enum(['H1', 'H2', 'H3']),
    surface: z.coerce.number().min(0),
    invoiceDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});

export type BarEn101Schema = z.infer<typeof BarEn101Schema>;