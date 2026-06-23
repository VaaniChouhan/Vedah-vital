import { z } from 'zod';

export const HeavyMetalsSchema = z.object({
  status: z.enum(['PASS', 'FAIL']),
  lead: z.string(),
  cadmium: z.string(),
  mercury: z.string(),
  arsenic: z.string(),
});

export const MicrobialSchema = z.object({
  status: z.enum(['PASS', 'FAIL']),
  salmonella: z.string(),
  ecoli: z.string(),
  yeastMold: z.string(),
});

export const LabTestReportSchema = z.object({
  batchCode: z.string().regex(/^VV-[A-Z]{3,4}-\d{4}-\d{3}$/, {
    message: 'Invalid batch code format. Must match VV-XXX-YYYY-ZZZ',
  }),
  mfgDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format (YYYY-MM-DD)' }),
  expDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format (YYYY-MM-DD)' }),
  analysisDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format (YYYY-MM-DD)' }),
  withanolides: z.string(),
  piperine: z.string(),
  heavyMetals: HeavyMetalsSchema,
  microbial: MicrobialSchema,
  organicPurity: z.string(),
  certifiedFacility: z.string(),
  certificateUrl: z.string(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
  date: z.string(),
  verified: z.boolean(),
  avatarInitials: z.string(),
});
