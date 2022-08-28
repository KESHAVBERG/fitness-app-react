import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { options, fetchData, youtubeOptions } from '../utils/fetchData';
import Details from '../componets/Details';
import ExcerciseVideos from '../componets/ExcerciseVideos';

const ExcerciseDetails = () => {
  const [exerciseDetail, SetExerciseDetail] = useState({});
 const [youTubeDetails, setYouTubeDetails] =useState({})
  const {id} = useParams();

  useEffect(()=>{
    const fetchExcerciseData = async()=>{
      const excerciseurl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const excerciseDetailData = await fetchData(`${excerciseurl}/exercises/exercise/${id}`, options);
      const youTubeData = await fetchData(`${youtubeUrl}/search?query=${excerciseDetailData.name}`, youtubeOptions);

      SetExerciseDetail(excerciseDetailData);
      setYouTubeDetails(youTubeData.contents);
    }
    fetchExcerciseData();
  }, [])

  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExcerciseVideos youTubeDetails = {youTubeDetails} name={exerciseDetail.name}/>
    </Box>
  )
}

export default ExcerciseDetails;