import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {

    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }} position="relative" p="20px">
            <Typography color="#d68a34" fontWeight="600" fontSize="26px">
                FItness Club
            </Typography>
            <Typography fontWeight={700}
                color="#d68a34"
                sx={{ fontSize: { lg: '44px', xs: '40px'}
            }} mb="23px" mt="30px">
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4} color="#d68a34">
                Check out the most exercises
            </Typography>
            <Button variant="contained" href="#exercises" className="exercises-btn" sx={{ backgroundColor: '#f2b957', padding: '10px'}}>Explore Exercises</Button>
            <Typography
                fontWeight={600}
                color="#d68a34"
                fontSize="200px"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none'}
                }}>
                Exercises
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
        </Box>
    );
};

export default HeroBanner;