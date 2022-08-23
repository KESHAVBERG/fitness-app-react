import React from 'react'
import { Typography, Box, Button, Stack } from '@mui/material';

import BodyPart from '../assets/icons/body-part.png'
import Target from '../assets/icons/target.png'
import Equipment from '../assets/icons/equipment.png'

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const iconsanddetailing = [
    {
      icons: BodyPart,
      name: bodyPart
    },
    {
      icons: Target,
      name: target
    },
    {
      icons: Equipment,
      name: equipment
    }
  ]

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image' style={{height:"600px"}}/>

      <Stack alignItems="left" justifyContent="left" gap="60px">
        <Typography variant='h4' sx={{ textTransform: 'uppercase', fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant='p'>
          It targets the {target} and a great excercise for the {bodyPart}
        </Typography>
        {   iconsanddetailing.map((item) => (
          <Stack key={item.name} direction="row" alignItems="center" gap='24px'>
            <Button sx={{borderRadius:"50%", background: "#fff2db", width:"100px", height:"100px"}} >
              <img src={item.icons} alt="" srcset=""   width="50px" height="50px"/>             
            </Button>
            <Typography variant='h5' textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>


    </Stack>


  )
}

export default Details