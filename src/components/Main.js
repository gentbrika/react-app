import React from 'react'
import Post from './Post'
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import { Profile } from './Profile';
import './main.css'
import CreatePost from './CreatePost';

export const Main = () => {
    return (
        <>
            <Navbar />
            <Grid container spacing={1}>
                <Grid xs={4} className='profile'>
                    <Profile />
                </Grid>
                <Grid xs={7}>
                    <CreatePost />
                    <Post />
                </Grid>
            </Grid>
        </>
    )
}
