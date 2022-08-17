import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', background: '#f2b957', fontSize: '14px', borderRadius: '20px', textTransform: 'catpitalize'}}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#d68a34', fontSize: '14px', borderRadius: '20px', textTransform: 'catpitalize'}}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#373737" fontWeight="bold" mt="11px" pb="10px" textTransform="catpitalize" fontSize="22px">
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;