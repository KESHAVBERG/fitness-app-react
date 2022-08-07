import { Box, Stack, Typography } from '@mui/material';
import { Pagination } from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import { options, fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExcerciseCard';
const Excercises = ({ selectedBodyPart, setSelectedBodyPart, result }) => {
  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px" } }}
      mt="50px"
      p="20px"
    >

      <Typography variant='h4' sx={{
        fontWeight: 500
      }}>
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {
          result.map((r, index) => (
            <ExcerciseCard key={index} excercise = {r} />
            ))
        }

      </Stack>

    </Box>
  )
}

export default Excercises