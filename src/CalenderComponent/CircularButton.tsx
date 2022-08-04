import React from "react";
import ReactDom from "react-dom";

interface Props {
  text: string;
  onClick: () => void;
}

const CircularButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className="circular-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CircularButton;
