"use client";

import {
  format,
  formatDistanceToNow,
  isBefore,
  startOfTomorrow,
} from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const BasicAgeCalculator = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  return (
    <div className="grid gap-6">
      <h1 className="text-center text-xl font-semibold">
        {inputDate ?
          isBefore(inputDate, startOfTomorrow()) ?
            `You are ${formatDistanceToNow(inputDate)} old`
          : `You are ${formatDistanceToNow}(inputDate) old`
        : "Select your date of birth"}
      </h1>
      <Popover
        open={open}
        onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date"
              className="w-full justify-between font-normal"
              aria-label="Select your date of birth"
            />
          }>
          {inputDate ? format(inputDate, "PPPP") : "Pick a date"}
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden"
          align="center">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={inputDate}
            onSelect={(date) => {
              setInputDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BasicAgeCalculator;
