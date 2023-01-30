import { MoreHorizOutlined } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import React from 'react';
import Header from './Header';

const DailyPlan = ({ style }) => {
  const theme = useTheme();

  const chartData = [
    {
      id: 'Shipment processed',
      label: 'Shipment processed',
      value: 1010,
      color: 'hsl(4, 70%, 50%)',
    },
    {
      id: 'Orders processed',
      label: 'Orders processed',
      value: 650,
      color: 'hsl(204, 70%, 50%)',
    },
    {
      id: 'Requests considered',
      label: 'Requests considered',
      value: 10,
      color: 'hsl(303, 70%, 50%)',
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
        <Header
          variant="h6"
          subVariant="h7"
          title="Daily plan"
          subtitle="Wed 15 Jun"
        ></Header>
        <MoreHorizOutlined fontSize="large" />
      </Box>
      <Box height="250px">
        <ResponsivePie
          data={chartData}
          margin={{ top: 40, right: 50, bottom: 10, left: 50 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]],
          }}
          // arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={
            theme.palette.mode === 'dark'
              ? theme.palette.grey[400]
              : theme.palette.secondary[200]
          }
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          // arcLabelsSkipAngle={15}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
            },
          ]}
        ></ResponsivePie>
      </Box>
    </Box>
  );
};

export default DailyPlan;
