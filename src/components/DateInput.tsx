import React from "react";
import { Controller, Control } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputProps {
  label: string;
  control: Control;
  name: string;
  placeholder: string;
  rules?: object;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  control,
  name,
  placeholder,
  rules,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-800 font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules} // Передаємо правила валідації
        render={({ field }) => (
          <DatePicker
            placeholderText={placeholder}
            selected={field.value}
            onChange={field.onChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      />
    </div>
  );
};

export default DateInput;
