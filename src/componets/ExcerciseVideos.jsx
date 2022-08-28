import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExcerciseVideos = ({ youTubeDetails, name }) => {

  console.log("----------")
  console.log(youTubeDetails[0])
  if (!youTubeDetails.length) return "Loading ..."
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant='h4' mb='33px' textTransform="capitalize">
        Watch excercise videos for {name}
      </Typography>

      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{ flexDeirection: { lg: 'row' }, gap: { lg: '110px', xs: "0" } }} >
        {youTubeDetails?.slice(0, 3).map((item, index) => (
          <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} key={index} className="excercise-video" target="_blank" rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant='h5' color="#000">
              {item.video.title}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExcerciseVideos