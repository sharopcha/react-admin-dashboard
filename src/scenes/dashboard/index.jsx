import React from 'react';
import FlexBetween from 'components/FlexBetween';
import Header from 'components/Header';
import { Box, useTheme } from '@mui/material';
import StatCard from 'components/StatCard';

import delivered from 'assets/png-icons/icons8-delivered-96.png';
import delivery from 'assets/png-icons/icons8-delivery-96.png';
import deployment from 'assets/png-icons/icons8-deployment-96.png';
import product from 'assets/png-icons/icons8-product-96.png';
import DelayedDelivery from 'components/DelayedDelivery';
import DailyPlan from 'components/DailyPlan';
import AvailableTruckCard from 'components/AvailableTruckCard';
import RecentRequestsCard from 'components/RecentRequestsCard';
import TruckDetailDrawer from 'components/TruckDetailDrawer';
import { useState } from 'react';

const Dashboard = () => {
  const [openTruckDetail, setOpenTruckDetail] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);

  const theme = useTheme();

  const statCards = [
    {
      title: 'New Packages',
      value: 222,
      image: product,
    },
    {
      title: 'Ready for shipping',
      value: 60,
      image: deployment,
    },
    {
      title: 'In transit',
      value: 2000,
      image: delivery,
    },
    {
      title: 'Delivered',
      value: 3600,
      image: delivered,
    },
  ];

  const onClickItem = (truck) => {
    setOpenTruckDetail(true);
    setSelectedTruck(truck);
  };

  const onDrawerClose = () => {
    setOpenTruckDetail(false);
  };

  return (
    <>
      <Box m="1.5rem 2.5rem">
        <FlexBetween>
          <Header title="Overview" variant={'h4'} />
        </FlexBetween>

        <Box display="flex" width="100%">
          {statCards.map(({ title, value, image }) => (
            <StatCard
              style={{
                width: '14rem',
              }}
              title={title}
              value={value}
              image={image}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          <DelayedDelivery
            style={{
              flex: 1,
            }}
            onItemClick={onClickItem}
          />
          <DailyPlan
            style={{
              flex: 1,
            }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          <AvailableTruckCard
            style={{
              flex: 1,
            }}
          />
          <RecentRequestsCard
            style={{
              flex: 1,
            }}
          />
        </Box>
      </Box>
      <TruckDetailDrawer
        open={openTruckDetail}
        onClose={onDrawerClose}
        selectedTruck={selectedTruck}
      />
    </>
  );
};

export default Dashboard;
