import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

export const Calendar = ({ label, value, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} value={value} onChange={setDate} />
    </LocalizationProvider>
  );
};
