import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from './Header';

const DelayedDelivery = ({ style, onItemClick }) => {
  const theme = useTheme();

  const trucksData = [
    {
      destination: 'Valencia - Barcelona',
      truck: 'B945324',
      arrivalTime: '07:05 AM',
      delayedTime: '5:05 h',
      id: '2538674gy87g34',
    },
    {
      destination: 'Valencia - Barcelona',
      truck: 'B345524',
      arrivalTime: '07:05 AM',
      delayedTime: '5:05 h',
      id: '78sdfjkbn3e4iuh',
    },
    {
      destination: 'Valencia - Barcelona',
      truck: 'B385024',
      arrivalTime: '07:05 AM',
      delayedTime: '5:05 h',
      id: 'as87yh2389henu',
    },
  ];

  const columns = [
    {
      field: 'destination',
      headerName: 'Destination',
      flex: 1,
    },
    {
      field: 'truck',
      headerName: 'Truck',
      flex: 0.5,
    },
    {
      field: 'arrivalTime',
      headerName: 'Arrival Time',
      flex: 0.5,
    },
    {
      field: 'delayedTime',
      headerName: 'Delayed Time',
      flex: 0.5,
    },
  ];

  return (
    <Box
      p="1rem"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      margin="0.5rem"
      style={style}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header variant="h6" title="Delayed delivery"></Header>
        <Box component="p" sx={{ color: theme.palette.secondary[200] }}>
          Show all
        </Box>
      </Box>
      <Box height="270px">
        <DataGrid
          columns={columns}
          rows={trucksData}
          pageSize={3}
          hideFooterSelectedRowCount={true}
          onRowClick={({ row }) => onItemClick(row)}
        />
      </Box>
    </Box>
  );
};

export default DelayedDelivery;
