import React, { useEffect, useState } from 'react'
import axios from "axios";

function Post() {
    let URL = 'http://localhost:3001/api/v1/';
    let allPosts = [];
    useEffect(() => {
        axios.get(`${URL}posts`).then((res) => {
            allPosts = res.data.posts;
        });
    },[]);

  return (
    <>
        <div>Post component</div>
    </>
  )

}

export default Post