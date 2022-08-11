import { string } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

interface Props {
  Month: string;
  Date: number;
  Day: string;
  datetestid: string;
  monthtestid: string;
  daytestid: string;
}

const Calendar: React.FC<Props> = ({
  Month,
  Date,
  Day,
  datetestid,
  monthtestid,
  daytestid,
}) => {
  return (
    <div className="container">
      <div className="top-bar" data-testid={monthtestid}>
        {Month}
      </div>
      <div className="flex-container-date">
        <div className="day-number" data-testid={datetestid}>
          {Date}
        </div>
        <div className="day-text" data-testid={daytestid}>
          {Day}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
