import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExcerciseVideos = ({ youTubeDetails, name }) => {

  console.log("----------")
  console.log(youTubeDetails)
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant='h4' mb='33px' textTransform="capitalize">
        Watch excercise videos for {name}
      </Typography>

      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" 
      sx={{ flexDeirection: { lg: 'row' }, gap:{ lg: '110px', xs:"0" } }} >
        {youTubeDetails?.content.slice(0,3).map((item, index)=>(
          <a href={`https://www.youtube.com/watch?v=${item.video.videId}`} key={index} className="excercise-video"></a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExcerciseVideos