import React from "react";
import ReactDom from "react-dom";

interface Props {
  text: string;
  onClick: () => void;
  testid: string;
}

const CircularButton: React.FC<Props> = ({ text, onClick, testid }) => {
  return (
    <button className="circular-button" onClick={onClick} data-testid={testid}>
      {text}
    </button>
  );
};

export default CircularButton;
