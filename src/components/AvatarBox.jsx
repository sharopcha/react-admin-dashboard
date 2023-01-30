import { Box, Typography } from '@mui/material';
import React from 'react';

const AvatarBox = ({
  image,
  alt,
  showTitle,
  title,
  subtitle,
  styles,
  avatarHeight,
  avatarWidth,
}) => {
  return (
    <Box display="flex" alignItems="center" sx={styles}>
      <Box
        component="img"
        alt={alt}
        src={image}
        height={avatarHeight ? avatarHeight : '32px'}
        width={avatarWidth ? avatarWidth : '32px'}
        borderRadius="50%"
        sx={{ objectFit: 'cover' }}
      />
      {showTitle && (
        <Box marginLeft={2}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AvatarBox;
