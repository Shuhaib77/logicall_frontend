import React from "react";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  options?: (string | number | SelectOption)[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  name,
  value,
  onChange,
  onBlur,
  className,
}) => {
  return (
    <div className="relative z-0">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`font-light appearance-none w-full px-3 text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${className}`}
      >
        {options.map((option, index) => {
          const opt =
            typeof option === "string" || typeof option === "number"
              ? { label: option.toString(), value: option }
              : option;

          return (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>

      {/* Dropdown Icon */}
      <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
