
import { Stack } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
    direction='row'
    justifyContent='space-around'
    sx={
      {
        gap:{sm:'122px', xs:'40px'},
        mt:{sm:'32px',xs:'20px'},
        justifyContent:'none'
      }
    }
    px='20px'

    >
      <Link to='/'>
        <img src={Logo} style={{ margin: '10px 20px' }} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        alignItems='flex-end'
        fontSize='20px'
      >
        <Link to='/' style={{
          textDecoration: 'none', color: '#FAC970'
        }}>Home</Link>
        <a href="#excercies" style={{
          textDecoration: 'none', color: '#FAC970'
        }}>Excercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;