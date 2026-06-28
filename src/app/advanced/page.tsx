import AdvancedAgeCalculator from "@/components/AdvancedAgeCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced age calculator",
  description: "Advanced | age calculator project",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="h-65 w-md gap-y-10">
        <CardHeader className="mt-4">
          <CardTitle className="grid place-items-center text-2xl">
            Advanced Age Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AdvancedAgeCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
