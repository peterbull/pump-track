"use client";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { createExercise } from "../lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { ReactNode, useState } from "react";
import { z } from "zod";
import { createExerciseSchema, AddExerciseProps } from "../lib/types";

type FormValues = z.infer<typeof createExerciseSchema>;

export function CreateExercise(): React.ReactElement {
  const form = useForm<FormValues>({
    resolver: zodResolver(createExerciseSchema),
    defaultValues: { name: "" },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data: AddExerciseProps) => {
    try {
      setIsSubmitting(true);
      await createExercise(data);
      form.reset();
      console.log(`created exercise`);
    } catch (error) {
      console.error(`error creating exercise`, error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Exercise Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Updating" : "Create Exercise"}
        </Button>
      </form>
    </Form>
  );
}
