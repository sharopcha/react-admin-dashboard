import { Typography, Box, useTheme } from '@mui/material';
import React from 'react';

const Header = ({ title, subtitle, variant, subVariant }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant={variant}
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant={subVariant} color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
