import { MenuItem, Select } from '@mui/material';
import React from 'react';

const SelectFiled = ({ id, value, onChange, schema, label }) => {
  const options = schema.enum.map((optionValue, index) => ({
    value: optionValue,
    label: schema.enumNames[index],
  }));

  console.log(schema);

  return (
    <Select
      id={id}
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
    >
      {options &&
        options.length > 0 &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </Select>
  );
};

export default SelectFiled;
