import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


const SimilaeExercises = ({ targetMuscleExercises, equipmentExercises}) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
            <Typography variant='h3' mb={5} color="#878787">
                Similar <span style={{ color: "#d68a34" }}>Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>

            <Typography variant='h3' mb={5} color="#878787">
                Similar <span style={{ color: "#d68a34" }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    );
};

export default SimilaeExercises;