import React from "react";
import { UseFormRegister } from "react-hook-form";

interface AirportInputProps {
  label: string;
  placeholder: string;
  register: ReturnType<UseFormRegister<any>>;
}

const AirportInput: React.FC<AirportInputProps> = ({
  label,
  placeholder,
  register,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-800 font-semibold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register}
      />
    </div>
  );
};

export default AirportInput;
