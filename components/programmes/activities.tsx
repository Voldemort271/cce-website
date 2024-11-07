import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const ActivitiesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>All activities by CCE IIT Mandi.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px] sm:w-[100px] text-right">
              Serial no.
            </TableHead>
            <TableHead className="w-[200px] sm:w-[400px]">Activity</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">1</TableCell>
            <TableCell>Management Development Program: GUVNL</TableCell>
            <TableCell>
              Six days general management/leadership course for officers of
              GUVNL
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">2</TableCell>
            <TableCell>Faculty Development Program DTE</TableCell>
            <TableCell>
              Faculty Development Updation Programme for Faculty of Polytechnics
              and Engineering Colleges (FDP -01)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">3</TableCell>
            <TableCell>Faculty Development Program DTE</TableCell>
            <TableCell>
              Faculty Development Updation Programme for Faculty of Polytechnics
              and Engineering Colleges (FDP -02)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">4</TableCell>
            <TableCell>Faculty Development Program DTE</TableCell>
            <TableCell>
              Faculty Development Programme for Faculty of Polytechnics and
              Engineering Colleges (FDP-03)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">5</TableCell>
            <TableCell>Faculty Development Program SCERT</TableCell>
            <TableCell>
              Teachers’ Training Program in Biology, Physics and Chemistry at
              IIT Mandi
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">6</TableCell>
            <TableCell>Faculty Development Program SCERT</TableCell>
            <TableCell>Teacher Training Program in Mathematics</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">7</TableCell>
            <TableCell>
              30th State Level Children’s Science Congress (CSC)
            </TableCell>
            <TableCell>
              IIT Mandi has organized Himachal Pradesh 30th State Level
              Children&apos;s Science Congress (CSC) jointly with HIMCOSTE on
              dated: 31 December, 2022 to 3 January, 2023 in institute premises.
              The participants came from different schools of Himachal Pradesh,
              there were 900 participants participated in this event.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">8</TableCell>
            <TableCell>
              Hands on Training for Science teachers from Govt. Schools
            </TableCell>
            <TableCell>
              CCE has organized Hands on training for science teachers from
              different Govt. Schools collaboration with HIMCOSTE on Dated: 22nd
              to 24th December, 2022
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">9</TableCell>
            <TableCell>Mathematics Day</TableCell>
            <TableCell>
              CCE has organized Mathematics Day with the collaboration with
              HIMCOSTE on dated: 22nd December, 2022. 300 students from Govt.
              and Private schools participated in the event along with the
              teachers from different schools
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">
              10
            </TableCell>
            <TableCell>
              Training for State Officials on &quot;Ayushman Bharat Digital
              Mission&quot;{" "}
            </TableCell>
            <TableCell>
              CCE has organized 2 day’s residential training on dated: 20th to
              21st December, 2022 for State officials
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ActivitiesTable;
