import AdvancedAgeCalculator from "@/components/AdvancedAgeCalculator";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced age calculator",
  description: "Advanced | age calculator project",
};

const page = () => {
  return (
    <section>
      <section className="grid h-[90dvh] place-items-center">
        <Card className="h-65 w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Advanced Age Calculator
            </CardTitle>
          </CardHeader>
          <AdvancedAgeCalculator />
        </Card>
      </section>
    </section>
  );
};

export default page;
