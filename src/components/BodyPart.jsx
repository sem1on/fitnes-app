import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/or/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={bodyPart === item ? { borderTop: '4px solid #d68a34', background: '#373737', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#373737', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#d68a34" textTransform="capitalize"> {item}</Typography>
    </Stack>
);

export default BodyPart;
