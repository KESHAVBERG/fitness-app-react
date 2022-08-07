import React, { useState } from 'react';
import { Box } from '@mui/system';
import Banner from '../componets/Banner';
import { Search } from '../componets/Search';
import Excercises from '../componets/Excercises';

const Home = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('all')
  const [result, setResult] = useState([])


  return (
    <Box>
      <Banner />

      <Search 
      selectedBodyPart={selectedBodyPart} 
      setSelectedBodyPart={setSelectedBodyPart} 
      setResult={setResult} 
      />

      <Excercises 
         selectedBodyPart={selectedBodyPart} 
         setSelectedBodyPart={setSelectedBodyPart} 
         result={result} 
      />
    </Box>
  )
}

export default Home;