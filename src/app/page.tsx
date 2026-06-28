import BasicAgeCalculator from "@/components/BasicAgeCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic age calculator",
  description: "Basic | age calculator project",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="h-65 w-md gap-y-10">
        <CardHeader className="mt-4">
          <CardTitle className="grid place-items-center text-2xl">
            Basic Age Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BasicAgeCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
