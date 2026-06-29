"use client";

import { dobSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const AdvancedAgeCalculator = () => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(dobSchema),
    defaultValues: {
      dob: undefined,
    },
    mode: "all",
  });

  const submitHandeler = ({ dob }: DobType) => {
    setSubmittedDate(dob);
    console.log("Selected DOB:", dob);
  };

  return (
    <div className="mx-auto grid w-full max-w-sm gap-6">
      <h1 className="text-center text-xl font-semibold">YOUR DOB</h1>
      <form
        onSubmit={handleSubmit(submitHandeler)}
        className="grid gap-4 px-4"
        noValidate>
        <Controller
          name="dob"
          control={control}
          render={({ field }) => (
            <Popover>
              <PopoverTrigger>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-between font-normal">
                  Dob
                  <ChevronDownIcon className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-auto p-0"
                align="center">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
          )}
        />

        <Button type="submit">Calculate Age</Button>
      </form>
    </div>
  );
};

export default AdvancedAgeCalculator;
