import React, { useEffect, useState } from 'react'
import Post from './Post'
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import { Profile } from './Profile';
import './main.css'
import CreatePost from './CreatePost';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Main = () => {
    let URL = 'http://localhost:3001/api/v1/';
    const [posts, setPosts] = useState()
    const [users, setUsers] = useState()
    const getData = async () => {
        const data = await axios.get(`${URL}posts`);
        setPosts(data.data.posts);
    }

    const getUsers = async () => {
        const allUsers = await axios.get(`${URL}users`);
        setUsers(allUsers.data.users)
    }

    let navigate = useNavigate();


    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        };
        getData();
        getUsers();
    }, []);
    
    return (
        <>
            <Navbar />
            <Grid container spacing={1}>
                <Grid xs={4} className='profile'>
                    <Profile users={users} />
                </Grid>
                <Grid xs={7}>
                    <CreatePost onPostCreate={getData} />
                    <Post posts={posts} onPostLike={getData}  />
                </Grid>
            </Grid>
        </>
    )
}
