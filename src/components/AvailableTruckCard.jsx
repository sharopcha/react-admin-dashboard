import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import React from 'react';
import Header from './Header';

const AvailableTruckCard = ({ style }) => {
  const theme = useTheme();

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  return (
    <Box
      p="1rem"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      margin="0.5rem"
      style={style}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header variant="h6" title="Available trucks"></Header>
        <Box component="p" sx={{ color: theme.palette.secondary[200] }}>
          Show all
        </Box>
      </Box>
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box flex={2}>
                <Typography marginBottom={1} variant="h6">
                  B468823
                </Typography>
                <Typography variant="subtitle2">Barcelona - Berlin</Typography>
              </Box>
              <Box flex={1}>
                <Typography
                  textAlign="end"
                  marginBottom={1}
                  variant="subtitle1"
                >
                  90/100%
                </Typography>
                <BorderLinearProgress variant="determinate" value={90} />
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box flex={2}>
                <Typography marginBottom={1} variant="h6">
                  B468823
                </Typography>
                <Typography variant="subtitle2">Barcelona - Berlin</Typography>
              </Box>
              <Box flex={1}>
                <Typography
                  textAlign="end"
                  marginBottom={1}
                  variant="subtitle1"
                >
                  30/100%
                </Typography>
                <BorderLinearProgress variant="determinate" value={30} />
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box flex={2}>
                <Typography marginBottom={1} variant="h6">
                  B468823
                </Typography>
                <Typography variant="subtitle2">Barcelona - Berlin</Typography>
              </Box>
              <Box flex={1}>
                <Typography
                  textAlign="end"
                  marginBottom={1}
                  variant="subtitle1"
                >
                  50/100%
                </Typography>
                <BorderLinearProgress variant="determinate" value={50} />
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default AvailableTruckCard;
