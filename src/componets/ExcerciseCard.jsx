import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Stack } from '@mui/material'


const ExcerciseCard = ({excercise}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={`excercise/${excercise.id}`}>
      <img src={excercise.gifUrl} alt={excercise.name} loading="Lazy" />
      <Stack direction="row">
        <Button sx = {{
          ml:"22px", color:"white", backgroundColor:"#FBC461", fontSize:"14px", borderRadius:"30px", textDecoration:"none"
        }}>
          {excercise.bodyPart}
        </Button>

        <Button sx = {{
          ml:"22px", color:"white", backgroundColor:"#FCA370", fontSize:"14px", borderRadius:"30px", textDecoration:"none"
        }}>
          {excercise.target}
        </Button>
      </Stack>
      <Typography sx={{
        color:"black",
        textTransform:"capitalize",
        ml:"25px",
        mt:"10px",
        fontWeight:"bold"
      }}>
        {excercise.name}
      </Typography>
    </Link>
  )
}

export default ExcerciseCard