import { Stack, Box, Typography, Button, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({
    status: {
        danger: '#FFB124',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#FFB124',
            contrastText: '#fff',
        },
    },
});

const Banner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { lg: '70px', xs: '50px' }
        }} position='relative'
            p='20px'
        >
            <Typography fontSize='30px' fontWeight='600' color='orange' mb={3}>
                Let's Sweat
            </Typography>

            <ThemeProvider theme={theme}>
                <Button color="neutral" variant="contained" href='#exercises'>
                    Search Exercises
                </Button>
            </ThemeProvider>
        </Box>
    )
}


export default Banner