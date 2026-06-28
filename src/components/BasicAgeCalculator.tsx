"use client";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const BasicAgeCalculator = () => {
  return (
    <div className="grid gap-6">
      <h1 className="text-center text-xl font-semibold">
        Select Your Date Of Birth
      </h1>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date"
              className="w-full justify-between font-normal"
              aria-label="Select your date of birth"
            />
          }>
          Pick a date
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden"
          align="center">
          <Calendar
            mode="single"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BasicAgeCalculator;
