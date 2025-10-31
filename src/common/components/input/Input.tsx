
import type { ChangeEvent, FocusEvent } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
  name: string;
  value: any;
  type:string
}

function Input({
  placeholder,
  className,
  handleChange,
  handleBlur,
  name,
  value,
  type='text'
}: InputProps) {
  const baseStyle = "border border-1 ";
  return (
    <input
      placeholder={placeholder}
      className={`${baseStyle} ${className}`}
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
  );
}

export default Input;
