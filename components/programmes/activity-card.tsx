import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  name: string;
  desc: string;
  Link1: string;
  Link2: string;
  Link1Name: string;
  Link2Name: string;
}

const ActivityCard = ({
  name,
  desc,
  Link1,
  Link2,
  Link1Name,
  Link2Name,
}: Props) => {
  return (
    <Card className="bg-slate-200 transition-all shadow-none hover:shadow-2xl hover:shadow-slate-900/[0.2] min-w-80">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-base text-slate-600">
          {desc}
        </CardDescription>
        <div className="flex justify-evenly">
          <Link href={Link1} className="underline" style={{ color: "blue" }}>
            {Link1Name}
          </Link>
          {Link2 != "#" && (
            <>
              <p>·</p>
              <Link
                href={Link2}
                className="underline"
                style={{ color: "blue" }}
              >
                {Link2Name}
              </Link>
            </>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ActivityCard;
