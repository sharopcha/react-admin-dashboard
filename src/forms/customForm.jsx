import React, { useState } from 'react';
import { Box } from '@mui/material';
import CustomTextFiled from 'form-controls/CustomTextFiled';

const CustomForm = () => {
  const [formState, setFormState] = useState({});

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <form>
        <CustomTextFiled
          formState={formState}
          id="first-name"
          onChange={onChange}
        />
        <CustomTextFiled
          formState={formState}
          id="last-name"
          onChange={onChange}
        />
        <CustomTextFiled
          formState={formState}
          id="mid-name"
          onChange={onChange}
        />
      </form>
    </Box>
  );
};

export default CustomForm;
