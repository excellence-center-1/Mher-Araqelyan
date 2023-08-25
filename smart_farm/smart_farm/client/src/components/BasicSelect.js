import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const BasicSelect=()=> {
  const [form, setForm] = React.useState('');

  const handleChange = (event) => {
    setForm(event.target.value);
  };
  const SelectStyle = { 
    width : '100%',
    height : '50%'
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">View form</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form}
          label="Form"
          onChange={handleChange}
          style={SelectStyle}
        >
          <MenuItem value={10}>Diagram</MenuItem>
          <MenuItem value={20}>...</MenuItem>
          <MenuItem value={30}>...</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
