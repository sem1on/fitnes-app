import React from 'react';
import { Link } from 'react-router-dom';

import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo_Or.png';

const Navbar = () => {
    return (
        <Stack direction="row" justifyContent="space-around" 
            sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px"
        >
            <Link to='/'>
                <img src={Logo} alt="logo" style={{ widht: '48px', hight: '48px', margin: '0px 20px'}} />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                aliginYtems="flex-end"
            >
                <Link to='/' style={{ textDecoration: 'none', color: '#d68a34', borderBottom: '3px solid #d68a34'}}>Home</Link>
                <a href='#exercises' style={{ textDecoration: 'none', color: '#d68a34'}}>Exercises</a>
            </Stack>
        </Stack>
    );
};

export default Navbar;