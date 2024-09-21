"use server";

import prisma from "../db";
import { z } from "zod";
import { AddExerciseProps } from "./types";

export async function createExercise(createExerciseData: AddExerciseProps) {
  await prisma.exerciseType.create({
    data: createExerciseData,
  });
}
