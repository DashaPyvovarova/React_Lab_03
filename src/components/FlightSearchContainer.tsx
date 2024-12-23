import React from 'react';
import AirportInput from "./AirportInput";
import DateInput from "./DateInput";
import PassengerInput from "./PassengerInput";
import {SubmitHandler, useForm} from "react-hook-form";

type FlightFormValues = {
    departureAirport: string;
    arrivalAirport: string;
    departureDate: Date | null;
    returnDate: Date | null;
    passengers: number;
};


const FlightSearchContainer = () => {
    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm<FlightFormValues>({
        defaultValues: {
            departureAirport: "",
            arrivalAirport: "",
            departureDate: null,
            returnDate: null,
            passengers: 1,
        },
    });

    const onSubmit: SubmitHandler<FlightFormValues> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-800">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-4 flex gap-4 bg-white shadow-md rounded-lg "
            >
                <AirportInput
                    label="Вибір аеропорту відправлення"
                    placeholder="Введіть місто або аеропорт"
                    register={register("departureAirport", {
                        required: "Поле обов'язкове",
                    })}
                />
                {errors.departureAirport && (
                    <p className="text-red-500">{errors.departureAirport.message}</p>
                )}

                <AirportInput
                    label="Вибір аеропорту прибуття"
                    placeholder="Введіть місто або аеропорт"
                    register={register("arrivalAirport", {
                        required: "Поле обов'язкове",
                    })}
                />
                {errors.arrivalAirport && (
                    <p className="text-red-500">{errors.arrivalAirport.message}</p>
                )}

                <DateInput
                    label="Дата вильоту"
                    control={control}
                    name="departureDate"
                    placeholder="Виберіть дату вильоту"
                    rules={{ required: "Поле обов'язкове" }} // Додаємо правило required
                />
                {errors.departureDate && (
                    <p className="text-red-500">{errors.departureDate.message}</p>
                )}

                <DateInput
                    label="Дата повернення"
                    control={control}
                    name="returnDate"
                    placeholder="Виберіть дату повернення"
                    rules={{ required: "Поле обов'язкове" }} // Додаємо правило required
                />
                {errors.returnDate && (
                    <p className="text-red-500">{errors.returnDate.message}</p>
                )}

                <PassengerInput
                    label="Кількість пасажирів"
                    register={register("passengers", {
                        required: "Поле обов'язкове",
                        min: { value: 1, message: "Мінімум 1 пасажир" },
                    })}
                />
                {errors.passengers && (
                    <p className="text-red-500">{errors.passengers.message}</p>
                )}

                <button
                    type="submit"
                    className="w-[150px] p-3 bg-pink-700 text-white rounded hover:bg-pink-800 transition-colors disabled:opacity-50"
                >
                    Шукати рейси
                </button>
            </form>
        </div>
    );
};

export default FlightSearchContainer;
