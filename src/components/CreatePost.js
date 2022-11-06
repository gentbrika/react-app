import React, { useEffect, useState } from 'react'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './createPost.css'
import SendIcon from '@mui/icons-material/Send';

function CreatePost() {
  let URL = 'http://localhost:3001/api/v1/';
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  let token = localStorage.getItem('token')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  let formData = new FormData();
  formData.append('image', image);
  formData.append('caption', caption);

  const handleSubmit = event => {
    axios.post(`${URL}posts`, formData, config).then((res) => {
      console.log(res);
    });
    event.preventDefault();
  };


  return (
    <>
      <div className='create-post'>
        <form onSubmit={handleSubmit}>
          <TextField
            type='text'
            placeholder='Caption'
            className='caption'
            onChange={event => setCaption(event.target.value)}
            value={caption}
          /><br />

          <CardActions className="submit">
            <SendIcon className='icon' variant="outlined" type="submit" onClick={handleSubmit}/><br />
          </CardActions>
        </form>
      </div>
    </>
  )
}

export default CreatePost