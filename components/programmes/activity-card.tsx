import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  name: string;
  desc: string;
}

const ActivityCard = ({ name, desc }: Props) => {
  return (
    <Card className="bg-slate-200 transition-all shadow-none hover:shadow-2xl hover:shadow-slate-900/[0.2] min-w-80">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-base text-slate-600">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ActivityCard;
