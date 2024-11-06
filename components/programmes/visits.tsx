import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const VisitsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>All school visits to IIT Mandi.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px] sm:w-[60px] text-right">
              Serial no.
            </TableHead>
            <TableHead className="w-[50px] sm:w-[100px]">Date</TableHead>
            <TableHead className="w-[30px] sm:w-[100px]">School</TableHead>
            <TableHead className="w-[50px] sm:w-[100px]">Students</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold text-base text-right">1</TableCell>
            <TableCell>25.06.2024</TableCell>
            <TableCell>Oakwood School Mandi</TableCell>
            <TableCell>67</TableCell>
            <TableCell>
              A one-day vocational education exposure visit was conducted for
              6th to 10th class students from Oakwood school Mandi. During the
              visit, the students toured the Tinkering , CAIR ( Centre for
              Artificial Intelligence and Robotics ) and CHCI (Centre for human
              computing & Interaction) LABs.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">2</TableCell>
            <TableCell>31.05.2024</TableCell>
            <TableCell>Indus Global School Mandi</TableCell>
            <TableCell>60</TableCell>
            <TableCell>
              One day Visit of their 60 students of Class 11th,12th, Organised
              to Tinkering Lab, Drone Lab for exposure and to gain practical
              experience. They were also taught about various career
              opportunities and how technology can improve people&apos; lives.
              Additionally, they received guidance on how to join IIT Mandi, as
              well as other premier institutions in the country.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">3</TableCell>
            <TableCell>16.05.2024</TableCell>
            <TableCell>GSSS Kapahi, Mandi</TableCell>
            <TableCell>60</TableCell>
            <TableCell>
              One-day visit for 60 students of Class 6th to 8th was organized to
              the Tinkering Lab and Drone Lab for exposure and practical
              experience, alongside career development guidance sessionwas also
              conducted. Additionally, the students were briefed on the
              admission process into IIT Mandi, as well as other premier
              institutes of research and technology.{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">4</TableCell>
            <TableCell>03.05.2024</TableCell>
            <TableCell>GSSS Siun, Mandi</TableCell>
            <TableCell>53</TableCell>
            <TableCell>
              One-day visit for 53 students of Class 8th to 10th was organized
              to the Control Lab and Tinkering Lab for practical experience.
              Additionally, they were briefed on how technology can improve the
              lives of common people. Moreover, a career counseling session was
              conducted by PhD scholars.{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">5</TableCell>
            <TableCell>05.04.2024</TableCell>
            <TableCell>GHS Koot, Sainj (Mandi) </TableCell>
            <TableCell>45</TableCell>
            <TableCell>
              A one-day vocational education exposure visit was conducted for
              6th to 8th class students from GHS Koot, District Mandi. During
              the visit, the students toured the Tinkering Lab of IIT Mandi.{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">6</TableCell>
            <TableCell>02.04.2024</TableCell>
            <TableCell>
              J.N. Government Engineering College, Sundernagar
            </TableCell>
            <TableCell>36</TableCell>
            <TableCell>
              One-day visit of 36 students of 2nd Year, CSE Department was
              conducted to IIT Mandi and internal labs including Tinkering, AI &
              Robotics Lab, IIT Catalyst & Prayog Shala where they also
              Interacted with MTech students and PhD Scholars who showcased
              their passion for their respective fields of study & research
              work.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">7</TableCell>
            <TableCell>27.03.2024</TableCell>
            <TableCell>
              Jawahar Navodaya Vidyalaya Bandrol, Raison, (Kullu)
            </TableCell>
            <TableCell>40</TableCell>
            <TableCell>
              One day Visit of their 40 students of Class 12th, Organised to
              Tinkering Lab, Drone Lab for exposure and to gain practical
              experience. They were also taught about various career
              opportunities and how technology can improve people&apos;s lives.
              Additionally, they received guidance on how to join IIT Mandi, as
              well as other premier institutions in the country.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">8</TableCell>
            <TableCell>27.03.2024</TableCell>
            <TableCell>G.S.S.S Kot (Hamirpur) </TableCell>
            <TableCell>15</TableCell>
            <TableCell>
              One-day visit for 15 students of Class 12 was organized to the
              Tinkering Lab and Drone Lab for exposure and practical experience,
              alongside career development guidance. Additionally, the students
              were briefed on the admission process to IIT Mandi, as well as
              other premier institutes of research and technology.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">9</TableCell>
            <TableCell>20.03.2024</TableCell>
            <TableCell>GSSS Kujabalh (Mandi)</TableCell>
            <TableCell>14</TableCell>
            <TableCell>
              One-day visit for 14 students of Class 12 was organized to the
              Control Lab and Tinkering Lab for practical experience.
              Additionally, they were briefed on how technology can improve the
              lives of common people. Moreover, a career counseling session was
              conducted by PhD scholars.{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">10</TableCell>
            <TableCell>20.02.2024</TableCell>
            <TableCell>GSSS Kotmoras (Mandi)</TableCell>
            <TableCell>24</TableCell>
            <TableCell>
              One-day visit of 24 students from GSSS Kotmoras, spanning across
              Class 7th, 8th, and 9th, was organized to the Control Lab and
              Tinkering Lab for exposure and practical experience. Additionally,
              PhD scholars showcased various day-to-day science phenomena with
              practical examples to the students.{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">11</TableCell>
            <TableCell>12.02.2024</TableCell>
            <TableCell>PM SHRI School KV Palampur(Kangra)</TableCell>
            <TableCell>71</TableCell>
            <TableCell>
              One-day visit of 71 students of Class 8th and 9th was organized to
              the Tinkering Lab and Drone Lab for exposure and practical
              experience. Additionally, a career counseling and guidance session
              was conducted by a PhD scholar. Furthermore, a hands-on training
              session was conducted on making a Wheatstone Bridge using Pencil,
              Wood, or Paper.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">12</TableCell>
            <TableCell>24.01.2024</TableCell>
            <TableCell>GSSS Bijhari (Hamirpur)</TableCell>
            <TableCell>52</TableCell>
            <TableCell>
              One day visit of class 10th&12th students was organized for 52
              students, visited the various labs including Control Lab,
              Tinkering Lab& Drone Lab for exposure and to gain practical
              experience.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">13</TableCell>
            <TableCell>17.01.2024</TableCell>
            <TableCell>PM SHRI School JNV Kothipura (Bilaspur)</TableCell>
            <TableCell>80</TableCell>
            <TableCell>
              A one-day visit for school students from classes 11th and 12th was
              organized, during which they visited the Tinkering Lab, Control
              Lab, and Drone Lab. A session on Tinkering was conducted by
              Professor Rahul Vaish, and hands-on training was provided to the
              students{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">14</TableCell>
            <TableCell>09.01.2024</TableCell>
            <TableCell>Govt.Sen.Sec. School Baryara (Mandi)</TableCell>
            <TableCell>14</TableCell>
            <TableCell>
              One day visit of 14 students of Class 11th-12th was organized on
              09-01-2024, Career guiding as well as hands on training session
              was conducted on making Wheatstone Bridge using Pencil &
              Wood/Paper.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">15</TableCell>
            <TableCell>22.12.2023</TableCell>
            <TableCell>Govt.Sen.Sec. School Kataula (Mandi)</TableCell>
            <TableCell>15</TableCell>
            <TableCell>
              One day Exposure visit to 11th-12th class girl students was
              organized under daughter Empowerment initiative (Beti Bachao Beti
              padhao) on 22-12-2023. Career guiding as well as hands-on training
              session was organized on Sensor Fabrication using Graphite from
              Pencil.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">16</TableCell>
            <TableCell>21.12.2023</TableCell>
            <TableCell>
              Govt.Sen.Sec. School Chowki Chandrahan (Mandi)
            </TableCell>
            <TableCell>51</TableCell>
            <TableCell>
              One day visit of class 6th to 8th students was organized on
              21-12-2023, 51 students visited the various labs including Control
              Lab, Tinkering Lab for exposure and to gain practical experience.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">17</TableCell>
            <TableCell>20.12.2023</TableCell>
            <TableCell>Govt.Sen.Sec. School Khuhan (Mandi)</TableCell>
            <TableCell>41</TableCell>
            <TableCell>
              One day visit of 41 school students was organized on 20-12-2023,
              students visited the Tinkering Lab for exposure and to gain
              practical experience as well as hands-on training session was also
              conducted.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">18</TableCell>
            <TableCell>12.12.2023</TableCell>
            <TableCell>Govt.Sen.Sec. School Batheri (Mandi)</TableCell>
            <TableCell>84</TableCell>
            <TableCell>
              One day visit of class 6th to 8th students was organized on
              12-12-2023, 84 students visited the Tinkering Lab, Control Lab.
              for exposure and to gain practical experience.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">19</TableCell>
            <TableCell>10.01.2023</TableCell>
            <TableCell>Govt. Model Sr. Sec. School Chauntra (Mandi)</TableCell>
            <TableCell>220</TableCell>
            <TableCell>
              One day visit of 220 students has been organized on dated:
              10-01-2023, students visited to AMRC Labs, Chemistry Lab,
              Auditorium & Tinkering Lab.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">20</TableCell>
            <TableCell>10.01.2023</TableCell>
            <TableCell>Govt. Sen. Sec. School Ropa (Mandi)</TableCell>
            <TableCell>42</TableCell>
            <TableCell>
              One day visit of 42 students has been organized on dated:
              10-01-2023, students visited to Electrical Machine Lab, Digital
              Electronics Lab. 45 min lecture on various career option delivered
              by Dr. Tushar Jain
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">21</TableCell>
            <TableCell>31.12.2022</TableCell>
            <TableCell>DAV Gohar(Mandi)</TableCell>
            <TableCell>41</TableCell>
            <TableCell>
              One day visit of 41 students has been organized on dated:
              30-12-2022, students visited to Control Lab, communication Lab and
              to PC Labs.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">22</TableCell>
            <TableCell>29.12.2022</TableCell>
            <TableCell>GSSS Gumma (Mandi)</TableCell>
            <TableCell>25</TableCell>
            <TableCell>
              One day visit of 25 students has been organized on dated:
              29-12-2022, students visited to Control Lab, communication Lab.
              for practical exposure.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">23</TableCell>
            <TableCell>26.12.2022</TableCell>
            <TableCell>GSSS Ghanagughat Arki (Solan)</TableCell>
            <TableCell>96</TableCell>
            <TableCell>
              One day visit of 96 students has been organized on dated:
              26-12-2022, students visited to Control Lab, communication Lab for
              exposure.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">24</TableCell>
            <TableCell>10.12.2022</TableCell>
            <TableCell>Sant Public School Hareta (Hamirpur)</TableCell>
            <TableCell>40</TableCell>
            <TableCell>
              One day visit of 40 students (class 10th, 11th, 12th ) has been
              organized on dated: 10-12-2022, students visited to FDP lab, Drone
              Lab, AMRC Labs and to the central workshop.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base text-right">25</TableCell>
            <TableCell>19.11.2022</TableCell>
            <TableCell>
              Swami Vivekanand Senior Secondary School Chauki Mankar (Una)
            </TableCell>
            <TableCell>59</TableCell>
            <TableCell>
              One day visit of class 8th to 12th school students has been
              organized on dated: 19-11-2022, students visited to Tinkering Lab,
              Physics lab. Lecture on various career option delivered by Dr.
              Tushar Jain
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default VisitsTable;
