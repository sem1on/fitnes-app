import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/or/body-part.png';
import TargetImage from '../assets/icons/or/target.png';
import EquipmentImage from '../assets/icons/or/equipment.png';


const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className='datail-image'/>
            <Stack sx={{ gap: { lg: '35px', xs: '20px '}}}>
                <Typography variant="h3" color="#d68a34">
                    {name}
                </Typography>
                <Typography variant="h6" color="#d68a34">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography color="#d68a34" textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail; 