import React from "react";
import Carasoul from "./Carousal";
import useDates from "./useDates";

const CalendarCarousal: React.FC = () => {
  const {
    MonthArray,
    DayArray,
    dates,
    ref,
    update,
    nextPage,
    prevPage,
    handleTouchStart,
    handleTouchMove,
  } = useDates();

  return (
    <Carasoul
      MonthArray={MonthArray}
      DayArray={DayArray}
      dates={dates}
      innerRef={ref}
      nextPage={nextPage}
      prevPage={prevPage}
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      update={update}
    />
  );
};

export default CalendarCarousal;
