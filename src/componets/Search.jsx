import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack, TextField } from '@mui/material';
import { options, fetchData } from '../utils/fetchData.js'
import '../App.css'
import HorizontalList from './HorizontalList.jsx';

export const Search = ({selectedBodyPart, setSelectedBodyPart, setResult}) => {
  const [search, setSearch] = useState('')

  const [bodyPart, setBodyPart] = useState([])


  const handleSearch = async () => {
    const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options)

    const searchResult = data.filter((ex) => ex.name.toLowerCase().includes(search)
      || ex.bodyPart.toLowerCase().includes(search)
      || ex.target.toLowerCase().includes(search)
      || ex.equipment.toLowerCase().includes(search)
    )

    setSearch('')

    setResult(searchResult)

    console.log(searchResult)
  }

  useEffect(() => {
    const fetchCategoryData = async () => {
      const bodyPartResponse = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)

      setBodyPart(['all', ...bodyPartResponse])
    }

    fetchCategoryData()
  }, [])
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
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          type="text"
        >
        </TextField>

        <Button className='search-btn'
          sx={
            {
              color: 'white',
              bgcolor: 'orange',
              width: { lg: '100px', xs: '80px' },
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              position: 'absolute',
              right: "0"
            }
          }
          onClick={handleSearch}
        >
          Search
        </Button>

        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalList data={bodyPart} selectedPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} />

        </Box>
      </Box>

    </Stack>
  )
}
