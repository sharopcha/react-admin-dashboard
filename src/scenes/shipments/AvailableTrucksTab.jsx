import { Box } from '@mui/material';
import AvailableTruckInfo from 'components/AvailableTruckInfo';
import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MOCK_DATA from '../../data/availableTrucks';

const AvailableTrucksTab = () => {
  const navigate = useNavigate();
  const [availableTrucks, setAvailableTruck] = useState([]);
  const trucks = useMemo(() => MOCK_DATA, []);

  useEffect(() => {
    setAvailableTruck(trucks);
  }, [trucks]);

  return (
    <Box display="flex" flexWrap="wrap">
      {availableTrucks &&
        availableTrucks.length > 0 &&
        availableTrucks.map((truck) => (
          <Box
            onClick={() => navigate(`/available-truck/${truck?.id}`)}
            marginLeft={2}
            marginTop={2}
            marginBottom={2}
            sx={{
              cursor: 'pointer',
            }}
          >
            <AvailableTruckInfo truck={truck} />
          </Box>
        ))}
    </Box>
  );
};

export default AvailableTrucksTab;
