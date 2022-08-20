import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { options, fetchData } from '../utils/fetchData';
import Details from '../componets/Details';
import ExcerciseVideos from '../componets/ExcerciseVideos';

const ExcerciseDetails = () => {
  const [exerciseDetail, SetExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    const fetchExcerciseData = async()=>{
      const excerciseurl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const excerciseDetailData = await fetchData(`${excerciseurl}/exercises/exercise/${id}`, options);

      console.log(excerciseDetailData);
      SetExerciseDetail(excerciseDetailData)
    }
    fetchExcerciseData();
  }, [])

  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExcerciseVideos />
    </Box>
  )
}

export default ExcerciseDetails;