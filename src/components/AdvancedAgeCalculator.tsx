"use client";

import { dobSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
    <form
      onSubmit={handleSubmit(submitHandeler)}
      className=""
      noValidate></form>
  );
};

export default AdvancedAgeCalculator;
