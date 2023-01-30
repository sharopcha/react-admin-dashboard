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
import truck from 'assets/png-icons/icons8-truck-96.png';
import cardboardBox from 'assets/png-icons/icons8-cardboard-box-96.png';

const RecentRequestsCard = ({ style }) => {
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
        <Header variant="h6" title="Recent requests"></Header>
        <Box component="p" sx={{ color: theme.palette.secondary[200] }}>
          Show all
        </Box>
      </Box>
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box flex={2} display="flex" alignItems="center">
                <Box
                  component="img"
                  src={cardboardBox}
                  height="30px"
                  width="30px"
                  marginRight="15px"
                  sx={{ objectFit: 'cover' }}
                />
                <Box>
                  <Typography marginBottom={1} variant="h6">
                    Parcel redirection
                  </Typography>
                  <Typography variant="subtitle2">
                    Barcelona - Berlin
                  </Typography>
                </Box>
              </Box>
              <Box flex={1}>
                <Typography
                  textAlign="end"
                  marginBottom={1}
                  variant="subtitle1"
                >
                  1 min ago
                </Typography>
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box flex={2} display="flex" alignItems="center">
                <Box
                  component="img"
                  src={cardboardBox}
                  height="30px"
                  width="30px"
                  marginRight="15px"
                  sx={{ objectFit: 'cover' }}
                />
                <Box>
                  <Typography marginBottom={1} variant="h6">
                    Packing problem
                  </Typography>
                  <Typography variant="subtitle2">
                    Barcelona - Berlin
                  </Typography>
                </Box>
              </Box>
              <Box flex={1}>
                <Typography
                  textAlign="end"
                  marginBottom={1}
                  variant="subtitle1"
                >
                  10 min ago
                </Typography>
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box flex={2} display="flex" alignItems="center">
                <Box
                  component="img"
                  src={truck}
                  height="30px"
                  width="30px"
                  marginRight="15px"
                  sx={{ objectFit: 'cover' }}
                />
                <Box>
                  <Typography marginBottom={1} variant="h6">
                    Machine problem
                  </Typography>
                  <Typography variant="subtitle2">
                    Barcelona - Berlin
                  </Typography>
                </Box>
              </Box>
              <Box flex={1}>
                <Typography
                  textAlign="end"
                  marginBottom={1}
                  variant="subtitle1"
                >
                  20 min ago
                </Typography>
              </Box>
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default RecentRequestsCard;
