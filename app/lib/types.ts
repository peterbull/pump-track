import { z } from "zod";

export interface AddExerciseProps {
  name: string;
}

export const createExerciseSchema = z.object({
  name: z.string(),
});
