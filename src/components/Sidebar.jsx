import React from 'react';
import {
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  ErrorOutline,
  Notifications,
  LocalShippingOutlined,
  ViewInArOutlined,
  FlagOutlined,
  AddOutlined,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from 'assets/profile.jpeg';

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Shipments',
    icon: <LocalShippingOutlined />,
  },
  {
    text: 'Parcels',
    icon: <ViewInArOutlined />,
  },
  {
    text: 'Branches',
    icon: <FlagOutlined />,
  },
  {
    text: 'Clients',
    icon: <Groups2Outlined />,
  },
  // {
  //   text: 'Transactions',
  //   icon: <ReceiptLongOutlined />,
  // },
  // {
  //   text: 'Geography',
  //   icon: <PublicOutlined />,
  // },
  // {
  //   text: 'Sales',
  //   icon: null,
  // },
  // {
  //   text: 'Overview',
  //   icon: <PointOfSaleOutlined />,
  // },
  // {
  //   text: "Daily",
  //   icon: <TodayOutlined />,
  // },
  // {
  //   text: 'Monthly',
  //   icon: <CalendarMonthOutlined />,
  // },
  // {
  //   text: 'Breakdown',
  //   icon: <PieChartOutlined />,
  // },
  // {
  //   text: 'Management',
  //   icon: null,
  // },
  // {
  //   text: 'Admin',
  //   icon: <AdminPanelSettingsOutlined />,
  // },
  // {
  //   text: 'Performance',
  //   icon: <TrendingUpOutlined />,
  // },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 1rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List
              style={{
                marginBottom: '1rem',
              }}
              disablePadding
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/requests`);
                    setActive('requests');
                  }}
                  sx={{
                    backgroundColor:
                      active === 'requests'
                        ? theme.palette.secondary[300]
                        : 'transparent',
                    color:
                      active === 'requests'
                        ? theme.palette.primary[600]
                        : theme.palette.secondary[100],
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ml: '2rem',
                      color:
                        active === 'requests'
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[200],
                    }}
                  >
                    <ErrorOutline />
                  </ListItemIcon>

                  <ListItemText primary="Requests" />
                  {active === 'requests' && (
                    <ChevronRightOutlined sx={{ ml: 'auto' }} />
                  )}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/notifications`);
                    setActive('notifications');
                  }}
                  sx={{
                    backgroundColor:
                      active === 'notifications'
                        ? theme.palette.secondary[300]
                        : 'transparent',
                    color:
                      active === 'notifications'
                        ? theme.palette.primary[600]
                        : theme.palette.secondary[100],
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ml: '2rem',
                      color:
                        active === 'notifications'
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[200],
                    }}
                  >
                    <Notifications />
                  </ListItemIcon>

                  <ListItemText primary="Notifications" />
                  {active === 'notifications' && (
                    <ChevronRightOutlined sx={{ ml: 'auto' }} />
                  )}
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List
              style={{
                marginTop: '1rem',
              }}
            >
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box flex={1} />
          <Divider />
          <Box
            marginBottom={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              style={{
                marginTop: '1rem',
                marginRight: '10px',
                marginLeft: '10px',
              }}
              variant="contained"
              startIcon={<AddOutlined />}
              onClick={() => navigate('/create-form')}
            >
              Create
            </Button>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
