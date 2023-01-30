import { TextField } from '@mui/material';
import React from 'react';

const CustomTextFiled = ({ value, id, onChange, label, schema }) => {
  console.log(schema);
  return (
    <TextField
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={schema?.showFloatingLable && label}
      variant={schema?.variant}
      fullWidth
      margin="dense"
      placeholder={label}
    />
  );
};

export default CustomTextFiled;
