import React, { useState } from 'react';
import { Box } from '@mui/system';
import Banner from '../componets/Banner';
import { Search } from '../componets/Search';
import Excercises from '../componets/Excercises';

const Home = () => {
  return (
    <Box>
      <Banner />
      <Search />
      <Excercises />
    </Box>
  )
}

export default Home;