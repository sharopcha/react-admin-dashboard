import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import ArrivalsTab from './ArrivalsTab';
import AvailableTrucksTab from './AvailableTrucksTab';
import DeparturedTrucksTab from './DeparturedTrucksTab';
import { useLocation } from 'react-router-dom';

const Shipments = () => {
  const [selectedTab, setTab] = useState('arrival');
  const theme = useTheme();
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.selectedTab) {
      setTab(state.selectedTab);
    }
  }, [state]);

  const showCurrentTab = () => {
    switch (selectedTab) {
      case 'arrival':
        return <ArrivalsTab />;
      case 'available':
        return <AvailableTrucksTab />;
      case 'departure':
        return <DeparturedTrucksTab />;
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Box marginY={3} display="flex" alignItems="center">
          <Typography marginX={3} variant="h4">
            Shipments
          </Typography>
          <Box display="flex">
            <Button
              onClick={() => setTab('arrival')}
              sx={{
                marginRight: '10px',
                backgroundColor:
                  selectedTab === 'arrival'
                    ? theme.palette.mode === 'light'
                      ? theme.palette.secondary[300]
                      : theme.palette.primary[400]
                    : theme.palette.mode === 'light'
                    ? theme.palette.secondary[300]
                    : theme.palette.primary[400],
              }}
              variant={selectedTab === 'arrival' ? 'contained' : 'outlined'}
            >
              Arrival
            </Button>
            <Button
              onClick={() => setTab('available')}
              sx={{
                marginRight: '10px',
                backgroundColor:
                  selectedTab === 'available'
                    ? theme.palette.mode === 'light'
                      ? theme.palette.secondary[300]
                      : theme.palette.primary[400]
                    : theme.palette.mode === 'light'
                    ? theme.palette.secondary[300]
                    : theme.palette.primary[400],
              }}
              variant={selectedTab === 'available' ? 'contained' : 'outlined'}
            >
              Available
            </Button>
            <Button
              onClick={() => setTab('departure')}
              sx={{
                marginRight: '10px',
                backgroundColor:
                  selectedTab === 'departure'
                    ? theme.palette.mode === 'light'
                      ? theme.palette.secondary[300]
                      : theme.palette.primary[400]
                    : theme.palette.mode === 'light'
                    ? theme.palette.secondary[300]
                    : theme.palette.primary[400],
              }}
              variant={selectedTab === 'departure' ? 'contained' : 'outlined'}
            >
              Departure
            </Button>
          </Box>
        </Box>
      </Box>
      {showCurrentTab()}
    </Box>
  );
};

export default Shipments;
