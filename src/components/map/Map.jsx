import React, { useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { useMemo } from 'react';
import { useTheme } from '@mui/material';

const Map = ({ scrollwheel }) => {
  const theme = useTheme();
  const center = useMemo(
    () => ({
      lat: 44.4268,
      lng: 26.1025,
    }),
    []
  );

  useEffect(() => {}, [theme.palette.mode, scrollwheel]);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId:
        theme.palette.mode === 'dark' ? '5dccc4159adff3d3' : '36543bb81fdc7e61',
      keyboardShortcuts: false,
      scrollwheel,
    }),
    [theme.palette.mode, scrollwheel]
  );

  return (
    <GoogleMap
      zoom={9}
      center={center}
      options={mapOptions}
      mapContainerStyle={{
        height: '100%',
        width: '100%',
      }}
    ></GoogleMap>
  );
};

export default Map;
