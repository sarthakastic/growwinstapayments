import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      className="w-full bg-red-500 text-center  py-2 hover:bg-red-400 hover:cursor-pointer "
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
