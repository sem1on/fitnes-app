import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOption, fetchData  } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

    const [currentPage, setCurrentPage] =useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if(bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption);
            }

            setExercises(exercisesData);
        };
        fetchExercisesData();
    }, [bodyPart]);

    const paginate =(e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth'})
    }

    return (
        <Box id="exercises"
        sx={{mt: { lg: '110px' }}}
        mt="250px"
        p="20px"
        >
            <Typography variant='h3' mb="46px" color="#d68a34">
                Showing Results
            </Typography> 
            <Stack 
                direction="row"
                sx={{ gap: { lg: '110px', xs: '50px'}}}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                    {exercises.length > 9 && (
                        <Pagination
                            className='pagi'
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    )}
            </Stack>
        </Box>
    );
};

export default Exercises;