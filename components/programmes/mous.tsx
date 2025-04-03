import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "../../components/ui/table";
import { mou } from "@/lib/mou";

const MOUsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>All MOUs with CCE, IIT Mandi.</TableCaption>
        <TableBody>
          {mou.map((elem, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-bold text-base text-right" key={idx}>
                {elem.number}
              </TableCell>
              <TableCell>
                <a
                  href={elem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  key={idx}
                >
                  {elem.name}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MOUsTable;
