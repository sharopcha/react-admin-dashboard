import { Close, Fullscreen, FullscreenExit, Send } from '@mui/icons-material';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import AvatarBox from './AvatarBox';
import Map from './map/Map';
import profileImage from 'assets/profile.jpeg';
import CustomStepper from './CustomStepper';

const TruckDetailDrawer = ({ open, onClose, selectedTruck }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        width={expanded ? '100vw' : '35vw'}
        sx={{
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <Box display="flex" justifyContent="space-between" margin={2}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
          <IconButton onClick={() => setExpanded(!expanded)}>
            {expanded ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center">
          <AvatarBox
            image={profileImage}
            showTitle={true}
            title="Jhon"
            subtitle="Doe"
            avatarHeight="30px"
            avatarWidth="30px"
            styles={{
              marginRight: '20px',
            }}
          />
          <Typography variant="h4">
            {selectedTruck?.destination} {selectedTruck?.truck}
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box
            flex={2}
            display="flex"
            justifyContent="space-between"
            margin={4}
          >
            <Box>
              <Typography>Departure date</Typography>
              <Typography>10 Jun 8:00 AM</Typography>
            </Box>
            <Box>
              <Typography>Arrival date</Typography>
              <Typography>15 Jun {selectedTruck?.arrivalTime}</Typography>
            </Box>
            <Box>
              <Typography>Time delay</Typography>
              <Typography>{selectedTruck?.delayedTime}</Typography>
            </Box>
          </Box>
          {expanded && (
            <Box flex={1} textAlign="end" alignSelf="center" marginRight={4}>
              <Button color="success" variant="contained" endIcon={<Send />}>
                Send message to driver
              </Button>
            </Box>
          )}
        </Box>
        <Box display="flex" flexDirection={expanded ? 'row-reverse' : 'column'}>
          <Box
            width="100%"
            height={expanded ? '65vh' : '200px'}
            paddingX={4}
            marginBottom={expanded && 3}
          >
            <Map scrollwheel={expanded} />
          </Box>
          <Box margin={!expanded && 4} marginLeft={4}>
            <CustomStepper />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          marginBottom={2}
        >
          {!expanded && (
            <Button color="success" variant="contained" endIcon={<Send />}>
              Send message to driver
            </Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default TruckDetailDrawer;
