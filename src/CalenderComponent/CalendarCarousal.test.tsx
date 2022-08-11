import { screen, render, fireEvent } from "@testing-library/react";
import CalendarCarousal from "./CalendarCarousal";
import React from "react";

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

describe("rendering the Carousal", () => {
  test("Check test", () => {
    render(<CalendarCarousal />);
    const date = screen.getByTestId(`date ${0}`);
    const month = screen.getByTestId(`month ${0}`);
    const day = screen.getByTestId(`day ${0}`);
    const today: Date = new Date();
    expect(date.textContent).toBe(`${today.getDate()}`);
    expect(month.textContent).toBe(`${MonthArray[today.getMonth()]}`);
    expect(day.textContent).toBe(`${DayArray[today.getDay()]}`);
  });
});

describe("Press Button", () => {
  test("Check test", () => {
    render(<CalendarCarousal />);

    const today: Date = new Date();
    const buttonforward = screen.getByTestId("button-forward");

    fireEvent.click(buttonforward);
    const date = screen.getByTestId(`date ${6}`);
    const month = screen.getByTestId(`month ${6}`);
    const day = screen.getByTestId(`day ${6}`);

    today.setTime(today.getTime() + 259200000 + 259200000);

    expect(date.textContent).toBe(`${today.getDate()}`);
    expect(month.textContent).toBe(`${MonthArray[today.getMonth()]}`);
    expect(day.textContent).toBe(`${DayArray[today.getDay()]}`);
  });
});
