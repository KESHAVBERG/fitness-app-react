import { Stack, Box, Typography } from '@mui/material'
import React from 'react'


const Banner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{lg:'70px', xs:'50px'}
    }} position='relative'
    p = '20px'
>
        <Typography>
            Let's Sweat
        </Typography>
    </Box>
  )
}


export default Banner