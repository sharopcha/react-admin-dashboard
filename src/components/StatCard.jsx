import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';

const StatCard = ({ title, value, image, style }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="1.25rem 1rem"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      margin="0.5rem"
      style={style}
    >
      <Box>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="600"
          marginTop={1}
          sx={{ color: theme.palette.secondary[200] }}
        >
          {value}
        </Typography>
      </Box>
      <Box
        component="img"
        src={image}
        height="45px"
        width="45px"
        marginLeft="15px"
        sx={{ objectFit: 'cover' }}
      />
    </Box>
  );
};

export default StatCard;
