import React from "react";
import ReactDom from "react-dom";
import Calendar from "./CalendarCard";
import CircularButton from "./CircularButton";

interface Props {
  DayArray: string[];
  MonthArray: string[];
  dates: Date[];
  innerRef: React.MutableRefObject<any>;
  update: number;
  prevPage: () => void;
  nextPage: () => void;
  handleTouchStart: (e: any) => void;
  handleTouchMove: (e: any) => void;
}

const Carasoul: React.FC<Props> = ({
  prevPage,
  nextPage,
  innerRef,
  handleTouchStart,
  handleTouchMove,
  dates,
  DayArray,
  MonthArray,
  update,
}) => {
  return (
    <div className="carousal-container">
      <CircularButton text="<" onClick={prevPage} />
      <div
        className="limit-cards-3"
        ref={innerRef}
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
