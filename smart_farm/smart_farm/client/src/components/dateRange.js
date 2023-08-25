import * as React from 'react';
import { DateRangePicker,LocalizationProvider} from '@mui/x-date-pickers-pro/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export const DateRange = () => { 
    return (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div>
             <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
          </div>
       </LocalizationProvider>
    );
 }