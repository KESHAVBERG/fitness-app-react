import React, {useEffect, useState} from 'react';
import { Box, Typography, Button, Stack, TextField } from '@mui/material';

export const Search = () => {
  return (
    <Stack alignItems="center" mt="30px" justifyContent = "center" p="20px">

      <Typography fontWeight={700} sx={{
        fontSize:{lg:"40px", xs:"30px"}}} mb="40px" textAlign="center">
        Search Excersies
      </Typography>
      <Box position="relative" mb="72px">

      </Box>

      </Stack>
  )
}
