import React from 'react'
import { Stack, Typography } from '@mui/material'
import { width } from '@mui/system'


const BodyPartCard = ({ item, slectedBodyPart, setSelectedBodyPart }) => {
  return (
    <Stack
      type="button"
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      onClick={()=>{setSelectedBodyPart(item)}}
      sx={{
        borderTop: item === slectedBodyPart ? "4px solid #FFB833" : "",
        width: "90px",
        height: "20px",
        cursor: 'pointer',
        gap: "20px"
      }}
    >
      <Typography>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPartCard