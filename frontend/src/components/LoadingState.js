import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

const LoadingState = ({ type = 'default' }) => {
  if (type === 'chart') {
    return (
      <Box sx={{ width: '100%', height: 400 }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="rectangular" width="100%" height={118} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </Box>
  );
};

export default LoadingState;

