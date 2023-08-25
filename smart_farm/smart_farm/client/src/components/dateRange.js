import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Directions, WidthFull, WidthNormal } from '@mui/icons-material';
import { BasicSelect } from './BasicSelect';
export const DateRange = () => {
   const [value, setValue] = React.useState([
      dayjs('2022-04-17'),
      dayjs('2022-04-21'),
   ]);

   // Use useEffect to log start_date and end_date on every render
   React.useEffect(() => {
      if (value[0]) { console.log('start_date:', value[0].format('YYYY-MM-DD')); }
      if (value[1]) { console.log('end_date:', value[1].format('YYYY-MM-DD')); }
   }, [value]); // Watch for changes in the 'value' state
   const buttonStyle = {
      width: '20%', // Set the width to 20%
      marginTop: '1%'
   }
   const DatePickerStyle={
      
   }
   const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', // Optionally, you can use this to center vertically as well
      flexDirection: 'column',
   };
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         
            <div style={containerStyle}>
               <DateRangePicker
                  value={value}
                  onChange={(newValue) => setValue(newValue)} style={DatePickerStyle}
               />
               <BasicSelect/>

               <Button variant="contained" style={buttonStyle}> Send </Button>
            </div>
        
      </LocalizationProvider>
   );
}
