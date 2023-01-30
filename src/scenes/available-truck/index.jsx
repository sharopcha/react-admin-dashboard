import React, { useEffect, useMemo, useState } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import { Box, Breadcrumbs, Typography, useTheme } from '@mui/material';
import TruckSvgComponent from 'components/truck/TruckSvgComponent';
import parcels from '../../data/parcels';
import availableTrucks from '../../data/availableTrucks';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { getTruckCapacityInPercentage } from 'utility/utilityFunctions';

const AvailableTruck = () => {
  const [allParcels, setAllParcels] = useState([]);
  const [capacity, setCapacity] = useState(0);
  const [selectedParcelsRow, setSelectedParcelsRow] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const Data = useMemo(() => parcels, []);
  const AvailableTrucks = useMemo(() => availableTrucks, []);
  const { truckId } = useParams();

  useEffect(() => {
    if (AvailableTrucks.length > 0) {
      const truck = AvailableTrucks.find((truck) => truck.id === truckId);
      if (truck) {
        console.log(truck);
        setSelectedTruck(truck);
        setCapacity(truck.availableCapacity);
      }
    }

    if (Data.length > 0) {
      setAllParcels(Data);
    }
  }, [truckId]);

  const tiers = ['Upper tier', 'Middle tier', 'Level tier'];
  const boxNumber = [...Array(3)];

  //   document.addEventListener('contextmenu', (e) => {
  //     e.preventDefault();
  //     if (selectedParcels.length > 0) {
  //       console.log(selectedParcels);
  //     }
  //   });

  const parcelsColumns = [
    {
      field: 'parcelNumber',
      headerName: 'Parcel number',
      flex: 1,
    },
    {
      field: 'volumeWeight',
      headerName: 'Volume weight',
      flex: 1,
    },
    {
      field: 'admissionDate',
      headerName: 'Admission date',
      flex: 1,
    },
  ];

  const selectedParcelsColumn = [
    {
      field: 'parcelNumber',
      headerName: 'Parcel number',
      flex: 1,
    },
    {
      field: 'volumeWeight',
      headerName: 'Volume weight',
      flex: 1,
    },
  ];

  const filterParcels = (selectedParcels) => {
    let currentCap =
      selectedTruck?.totalCapacity -
      (selectedTruck?.availableCapacity + getCapacity(selectedParcels));

    const parcels = allParcels.filter((parcel) => {
      return (
        parcel.volumeWeight <= currentCap ||
        selectedParcelsRow.includes(parcel.id)
      );
    });
    setAllParcels(parcels);
  };

  const addParcelToTruck = (parcels) => {
    if (parcels.length == 0 && selectedParcelsRow.length > 0) {
      return;
    }
    const selectedParcels = [];
    parcels.forEach((id) => {
      selectedParcels.push(allParcels.find((p) => p.id === id));
    });
    setSelectedParcelsRow(selectedParcels);

    filterParcels(selectedParcels);
  };

  const getCapacity = (selectedParcels = null) => {
    return (selectedParcels ? selectedParcels : selectedParcelsRow)
      .map((parcel) => parcel.volumeWeight)
      .reduce((acc, weight) => (acc += weight), 0);
  };

  return (
    <Box marginX={3} marginTop={1}>
      <Box marginBottom={2}>
        <Breadcrumbs>
          <Box
            onClick={() =>
              navigate('/shipments', { state: { selectedTab: 'available' } })
            }
            component="span"
            sx={{
              cursor: 'pointer',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography>Shipments</Typography>
          </Box>
          <Box component="span">
            <Typography>
              {selectedTruck?.vehicleIdentificationNumber}
            </Typography>
          </Box>
        </Breadcrumbs>
      </Box>
      <Box display="flex" alignItems="end">
        <Typography marginRight={2} variant="h4">
          {selectedTruck?.origin} - {selectedTruck?.destination}
        </Typography>
        <Typography variant="subtitle2">
          {selectedTruck?.arrivalDate}
        </Typography>
      </Box>
      <Box display="flex" click>
        {/* LEFT SIDE */}
        <Box
          display="flex"
          flexDirection="column"
          p="1.25rem 1rem"
          flex="1 1 100%"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          width="30rem"
          marginTop={2}
          marginRight={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h6">Truck load</Typography>
            </Box>
            <Typography variant="h4">
              {getTruckCapacityInPercentage(
                getCapacity() + selectedTruck?.availableCapacity,
                selectedTruck?.totalCapacity
              )}
              %
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={1}
          >
            <Box flex={1}>
              <Typography variant="subtitle2">Available, kg</Typography>
              <Typography variant="subtitle1">
                {getCapacity() + selectedTruck?.availableCapacity}/
                {selectedTruck?.totalCapacity}
              </Typography>
            </Box>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              sx={{
                opacity: 0.6,
              }}
            >
              <TruckSvgComponent
                capacity={getTruckCapacityInPercentage(
                  getCapacity() + selectedTruck?.availableCapacity,
                  selectedTruck?.totalCapacity
                )}
              />
            </Box>
          </Box>
          <Box height="100%">
            <DataGrid
              columns={selectedParcelsColumn}
              rows={selectedParcelsRow}
              getRowId={(row) => row?.id}
            />
          </Box>
          {/* {tiers.map((tier, index) => (
            <Box marginTop={1}>
              <Box display="flex" alignItems="end" marginLeft={0.5}>
                <Typography variant="subtitle2" marginRight={1}>
                  {tier}
                </Typography>
                <ErrorOutline fontSize="small" />
              </Box>
              <Box display="flex" justifyContent="space-between" width="100%">
                {boxNumber.map((_, i) => (
                  <Box
                    key={i}
                    flex={1}
                    margin={0.5}
                    height="60px"
                    sx={{
                      backgroundColor: i === index ? '#7CC1AE' : '#C6CECC',
                    }}
                    borderRadius={1}
                  ></Box>
                ))}
              </Box>
            </Box>
          ))} */}
        </Box>
        {/* RIGHT SIDE */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p="1.25rem 1rem"
          flex="1 1 100%"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          width="30rem"
          marginTop={2}
          height="500px"
          className="grid-box"
        >
          <DataGrid
            columns={parcelsColumns}
            rows={allParcels}
            getRowId={(row) => row.id}
            checkboxSelection
            onSelectionModelChange={addParcelToTruck}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AvailableTruck;
