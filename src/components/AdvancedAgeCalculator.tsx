"use client";

import { dobSchema, DobType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  format,
  intervalToDuration,
  isBefore,
  startOfTomorrow,
} from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const AdvancedAgeCalculator = () => {
  const [submittedDate, setSubmittedDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(dobSchema),
    defaultValues: {
      dob: undefined,
    },
    mode: "all",
  });

  const age = useMemo(() => {
    if (!submittedDate) return null;

    return intervalToDuration({
      start: submittedDate,
      end: new Date(),
    });
  }, [submittedDate]);

  const submitHandeler = ({ dob }: DobType) => {
    setSubmittedDate(dob);
    console.log("Selected DOB:", dob);
  };

  return (
    <div className="mx-auto grid w-full max-w-sm gap-6">
      <h1 className="text-center text-xl font-semibold">
        {submittedDate ?
          isBefore(submittedDate, startOfTomorrow()) ?
            <>
              You are{" "}
              <span className="font-bold text-blue-600">
                {age?.years} year{age?.years !== 1 ? "s" : ""}, {age?.months}{" "}
                month{age?.months !== 1 ? "s" : ""}, {age?.days} day
                {age?.days !== 1 ? "s" : ""}
              </span>{" "}
              old
            </>
          : "Please select a valid date of birth."
        : "Select your date of birth"}
      </h1>
      <form
        onSubmit={handleSubmit(submitHandeler)}
        className="grid gap-4 px-4"
        noValidate>
        <Controller
          name="dob"
          control={control}
          render={({ field }) => (
            <Popover
              open={open}
              onOpenChange={setOpen}>
              <PopoverTrigger>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-between font-normal">
                  {field.value ?
                    format(field.value, "PPP")
                  : "Pick your date of birth"}
                  <ChevronDownIcon className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-auto p-0"
                align="center">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  selected={field.value}
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpen(false);
                  }}
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
