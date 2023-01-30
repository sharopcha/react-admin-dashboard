import { Box, Breadcrumbs, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { getTruckCapacityInPercentage } from 'utility/utilityFunctions';
import TruckSvgComponent from './truck/TruckSvgComponent';

const AvailableTruckInfo = ({ truck }) => {
  const theme = useTheme();

  useEffect(() => {}, [truck]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      width="30rem"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h6">
            {truck?.origin} - {truck?.destination}
          </Typography>
          <Typography variant="caption">{truck?.arrivalDate}</Typography>
        </Box>
        <Typography variant="h4">
          {getTruckCapacityInPercentage(
            truck?.availableCapacity,
            truck?.totalCapacity
          )}
          %
        </Typography>
      </Box>
      <Box display="flex" width="100%">
        <Box marginTop={2} flex={1}>
          <Box>
            <Typography variant="subtitle2">Available, kg</Typography>
            <Typography variant="subtitle1">
              {truck?.availableCapacity}/{truck?.totalCapacity}
            </Typography>
          </Box>
          <Box marginTop={0.5}>
            <Typography variant="subtitle2">Shipment number</Typography>
            <Typography variant="subtitle1">{truck?.shipmentNumber}</Typography>
          </Box>
          <Box marginTop={0.5}>
            <Typography variant="subtitle2">Truck</Typography>
            <Box>
              <Typography variant="subtitle1">{truck?.vehicleModel}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                {truck?.vehicleIdentificationNumber}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box flex={1.5} display="flex" alignItems="center">
          <TruckSvgComponent
            capacity={getTruckCapacityInPercentage(
              truck?.availableCapacity,
              truck?.totalCapacity
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AvailableTruckInfo;
