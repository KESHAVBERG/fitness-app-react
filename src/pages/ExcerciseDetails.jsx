import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { options, fetchData } from '../utils/fetchData';
import Details from '../componets/Details';
import ExcerciseVideos from '../componets/ExcerciseVideos';

const ExcerciseDetails = () => {
  const [exerciseDetail, SetExerciseDetail] = useEffect([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExcerciseData = async()=>{

    }
  }, [])

  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExcerciseVideos />
    </Box>
  )
}

export default ExcerciseDetails;