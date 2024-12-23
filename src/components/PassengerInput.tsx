import React from "react";
import { UseFormRegister } from "react-hook-form";

interface PassengerInputProps {
  label: string;
  register: ReturnType<UseFormRegister<any>>;
}

const PassengerInput: React.FC<PassengerInputProps> = ({ label, register }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-800 font-semibold">{label}</label>
      <input
        type="number"
        min="1"
        max="500"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register}
      />
    </div>
  );
};

export default PassengerInput;
