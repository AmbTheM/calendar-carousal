import React from "react";
import { useState } from "react";
import ReactDom from "react-dom";
import Calendar from "./CalendarCard";
import CircularButton from "./CircularButton";

const MonthArray: string[] = [
  "January",
  "february",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DayArray: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
];

const objdate: Date = new Date();
var counter: number = 0;
const objdate_2: Date = new Date();
objdate_2.setDate(objdate.getDate() + 1);
const objdate_3: Date = new Date();
objdate_3.setDate(objdate.getDate() + 2);

const Carasoul: React.FC = () => {
  const [date_1, setDate_1] = useState<Date>(objdate);
  const [date_2, setDate_2] = useState<Date>(objdate_2);

  const [date_3, setDate_3] = useState<Date>(objdate_3);
  const [update, setUpdate] = useState<number>(counter);

  const nextPage = () => {
    counter++;
    objdate.setDate(objdate.getDate() + 3);
    objdate_2.setDate(objdate_2.getDate() + 3);
    objdate_3.setDate(objdate_3.getDate() + 3);
    setDate_1(objdate);
    setDate_2(objdate_2);
    setDate_3(objdate_3);
    console.log(objdate);
    setUpdate(counter);
  };

  const prevPage = () => {
    if (counter > 0) {
      counter--;
      objdate.setDate(objdate.getDate() - 3);
      objdate_2.setDate(objdate_2.getDate() - 3);
      objdate_3.setDate(objdate_3.getDate() - 3);
      setDate_1(objdate);
      setDate_2(objdate_2);
      setDate_3(objdate_3);
      setUpdate(counter);
    }
  };
  return (
    <div className="carousal-container">
      <CircularButton text="<" onClick={prevPage} />
      <Calendar
        Month={MonthArray[date_1.getMonth()]}
        Date={date_1.getDate()}
        Day={DayArray[date_1.getDay()]}
      />
      <Calendar
        Month={MonthArray[date_2.getMonth()]}
        Date={date_2.getDate()}
        Day={DayArray[date_2.getDay()]}
      />
      <Calendar
        Month={MonthArray[date_3.getMonth()]}
        Date={date_3.getDate()}
        Day={DayArray[date_3.getDay()]}
      />
      <CircularButton text=">" onClick={nextPage} />
    </div>
  );
};

export default Carasoul;
