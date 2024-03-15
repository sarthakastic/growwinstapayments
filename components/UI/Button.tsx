import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      className="w-full bg-primary text-center text-background px-2 rounded-lg  py-2 hover:bg-primaryForeground hover:text-primary hover:cursor-pointer hover:border hover:border-primary  "
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
