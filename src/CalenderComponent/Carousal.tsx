import React, { useRef, useCallback } from "react";
import { useState } from "react";
import ReactDom from "react-dom";
import Calendar from "./CalendarCard";
import CircularButton from "./CircularButton";

const MonthArray: string[] = [
  "January",
  "February",
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
const objdate_4: Date = new Date();
objdate_4.setDate(objdate.getDate() + 3);
const objdate_5: Date = new Date();
objdate_5.setDate(objdate.getDate() + 4);
const objdate_6: Date = new Date();
objdate_6.setDate(objdate.getDate() + 5);

const Carasoul: React.FC = () => {
  const [dates, setDates] = useState<Date[]>([
    objdate,
    objdate_2,
    objdate_3,
    objdate_4,
    objdate_5,
    objdate_6,
  ]);

  const [update, setUpdate] = useState<number>(counter);
  const [touchPosition, setTouchPosition] = useState<any>(null);

  const ref = useRef<any>();

  const updateDatesArray = () => {
    counter++;
    const temp: Date[] = [...dates];

    const date: Date = new Date(dates[3].getTime());

    date.setTime(dates[dates.length - 3].getTime() + 259200000);

    const date_2: Date = new Date(dates[4].getTime());

    date_2.setTime(dates[dates.length - 2].getTime() + 259200000);

    const date_3: Date = new Date(dates[5].getTime());

    date_3.setTime(dates[dates.length - 1].getTime() + 259200000);

    temp.push(date);
    temp.push(date_2);
    temp.push(date_3);
    setDates(temp);
    setUpdate(counter);
  };

  const scroll = (value: number) => {
    ref.current.scrollLeft += value;
  };
  const nextPage = () => {
    scroll(288);
    updateDatesArray();
  };

  const prevPage = () => {
    if (counter > 0) {
      counter--;
      scroll(-288);
    }
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextPage();
    }

    if (diff < -5) {
      prevPage();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousal-container">
      <CircularButton text="<" onClick={prevPage} />
      <div
        className="limit-cards-3"
        ref={ref}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {dates.map((date: Date, index: number) => (
          <Calendar
            key={index}
            Month={MonthArray[date.getMonth()]}
            Date={date.getDate()}
            Day={DayArray[date.getDay()]}
          />
        ))}
      </div>
      <CircularButton text=">" onClick={nextPage} />
    </div>
  );
};

export default Carasoul;
