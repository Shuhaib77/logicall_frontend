import React from "react";

interface ButtonProps {
  name?: any;
  type?:"button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

function Button({ name, className, onClick,type='button' }: ButtonProps) {
  const baseStyle = "border cursor-pointer ";
  return (
    <button onClick={onClick} type={type} className={`${baseStyle} ${className}`}>
      {name}
    </button>
  );
}

export default Button;
