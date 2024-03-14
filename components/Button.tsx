import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      className="w-full bg-primary text-center text-primaryForeground  py-2 hover:bg-foreground hover:cursor-pointer "
      onClick={onClick}
    >
      <p>{text}</p>
      <div className="w-10 h-10 bg-primaryForeground text-foreground">pf</div>
      <div className="w-10 h-10 bg-background text-primary ">b</div>
      <div className="w-10 h-10 bg-foreground ">f</div>
      <div className="w-10 h-10 bg-primary ">p</div>
    </div>
  );
};

export default Button;
