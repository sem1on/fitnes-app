import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { fetchData, exerciseOption } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExecissData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartLis', exerciseOption);
            // Указать правильный URL!!! специално допущенна ошибка!!!
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExecissData();
    }, []);

    const handelSearch = async () => { 
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
            const searchExersises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchExersises);
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography color="#d68a34" fontWeight={700} sx={{ fontSize: {  lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
                Awesome Exercises You <br/> Should Know 
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '40px',
                        },
                        fieldset: {
                            border: 'none',
                        },
                        width: {
                            lg: '1140px',
                            xs: '350px',
                        },
                        backgroundColor: '#878787',
                        borderRadius: '40px',
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text" 
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#f2b957',
                        color: '#fff',
                        borderRadius: '40px',
                        textTransform: 'none',
                        width: {
                            lg: '175px',
                            xs: '80px'
                        },
                        fontSize: {
                            lg: '20px',
                            xs: '12px'
                        },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handelSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', wight: '100%', p: '20px'}}>
                <HorizontalScrollbar 
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />                     
            </Box>
        </Stack>
    );
};

export default SearchExercises;