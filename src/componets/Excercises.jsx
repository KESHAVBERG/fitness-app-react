import { Box, Stack, Typography } from '@mui/material';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { options, fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExcerciseCard';
const Excercises = ({ selectedBodyPart, setSelectedBodyPart, result }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const excercisesPerPage = 9;

  const indexOfLastExercise = currentPage * excercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - excercisesPerPage;
  const currentExercises = result.slice(indexOfFirstExercise, indexOfLastExercise);

  const pageinate = (e, value) =>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:"smooth"})
  }
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
          currentExercises.map((r, index) => (
            <ExcerciseCard key={index} excercise = {r} />
            ))
        }

      </Stack>

      <Stack mt="100px" alignItems="center">

        { result.length > 9 && (
             <Pagination
             color="standard"
             shape="rounded"
             defaultPage={1}
             count={Math.ceil(result.length / excercisesPerPage)}
             page = {currentPage}
             onChange = {pageinate}
             size="large"
           />
        )

        }

      </Stack>

    </Box>
  )
}

export default Excercises