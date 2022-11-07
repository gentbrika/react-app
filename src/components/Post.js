import React, { useEffect, useState } from 'react'
import axios from "axios";

function Post() {
  let URL = 'http://localhost:3001/api/v1/';
  const [posts, setPosts] = useState()
  const getData = async ( ) => {
  const data =  await axios.get(`${URL}posts`);
    setPosts(data.data.posts);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if(posts) {
      setPosts(posts);
      console.log(posts);
    }
  }, [posts])

  return (
    <>
      {posts?.map((post ,i) => ( 
        <div className='post' key={i}>
          <p>{post.caption}</p>
        </div>
      ))}
    </>
  )

}

export default Post