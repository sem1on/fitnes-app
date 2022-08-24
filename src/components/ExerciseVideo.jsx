import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';


const ExerciseVideo = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return <Loader/>;
    return (
        <Box sx={{ marginTop: { ig: '200px', xs: '20px' }}} p="20px">
            <Typography variant="h3" mb="33px" color='#878787'>
                Watch <span style={{ color: '#d68a34', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack 
                justifyContent="flex-start" 
                flexWrap="wrap" 
                alignItems="center"
                sx={{
                    flexDirection: { lg: 'row'},
                    gap: { lg: '110px', xs: '0px'}
                }}
            >
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography sx={{ fontSize: { lg: '28px', xs: '18px'} }} fontWeight={600} color="#d68a34">
                                {item.video.title}
                            </Typography>
                            <Typography  fontSize="14px" color="#878787">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideo;