import BasicAgeCalculator from "@/components/BasicAgeCalculator";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic age calculator",
  description: "Basic | age calculator project",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="h-65 w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Basic Age Calculator
          </CardTitle>
        </CardHeader>
        <BasicAgeCalculator />
      </Card>
    </section>
  );
};

export default page;
