import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack, TextField } from '@mui/material';

import '../App.css'
export const Search = () => {
  const [search, setSearch] = useState('')

  const handleSearch = async()=>{

  }
  return (
    <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">

      <Typography fontWeight={700} sx={{
        fontSize: { lg: "40px", xs: "30px" }
      }} mb="40px" textAlign="center">
        Search Excersies
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={
            {
              input: {
                fontWeight: '700',
                border: 'none',
                borderRadius: '50px'
              },
              width: { lg: '1000px', xs: '350px' },
              borderRadius: '50px'
            }
          }
          placeholder='Search'
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase()) }}
          type="text"
        >
        </TextField>

        <Button className='search-btn'
        sx={
          {
            color:'white',
            bgcolor:'orange',
            width:{lg:'100px', xs:'80px'},
            fontSize:{lg:'20px', xs:'14px'},
            height:'56px',
            position:'absolute',
            right:"0"
          }
        }
        onClick = {handleSearch}
        >
          Search
        </Button>

      </Box>

    </Stack>
  )
}
