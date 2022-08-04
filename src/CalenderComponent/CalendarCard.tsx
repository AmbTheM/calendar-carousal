import React from "react";
import ReactDOM from "react-dom";

interface Props {
  Month: string;
  Date: number;
  Day: string;
}

const Calendar: React.FC<Props> = ({ Month, Date, Day }) => {
  return (
    <div className="container">
      <div className="top-bar"> {Month}</div>
      <div className="flex-container-date">
        <div className="day-number"> {Date} </div>
        <div className="day-text"> {Day}</div>
      </div>
    </div>
  );
};

export default Calendar;
