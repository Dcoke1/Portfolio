import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { enUS as locale } from "date-fns/locale";

type DateProps = {
  dateVal: string;
  setVal: Function;
};

const BasicDatePicker = ({ dateVal, setVal }: DateProps) => (
  
  <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
    <DatePicker
      label="Search Articles"
      value={dateVal}
      maxDate={new Date()}
      onChange={(newVal) => {
        setVal(newVal);
      }}
      renderInput={(attr) => <TextField {...attr} />}
    />
  </LocalizationProvider>
);
export default BasicDatePicker;
