import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios";
import Navbar from './Navbar';

function PostDetails() {
    let params = useParams();
    let URL = 'http://localhost:3001/api/v1/';
    let token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        console.log(params);
        axios.get(`${URL}posts?id=${params.id}`, config).then((res) => {});
    }, [])
  return (
    <>
        <Navbar />
        <div>details</div>
    </>
  )
}

export default PostDetails