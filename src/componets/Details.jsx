import React from 'react'
import { Typography, Box, Button, Stack } from '@mui/material';

import BodyPart from '../assets/icons/body-part.png'
import target from '../assets/icons/target.png'
import equipment from '../assets/icons/equipment.png'

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'}, p:"20px", alignItems:"center"}}>
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />

    </Stack>
  )
}

export default Details