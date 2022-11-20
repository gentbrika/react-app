import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import './profile.css'
import * as moment from 'moment'

export const Profile = ({ users }) => {

  const [userDetails, setUserDetails] = useState();

  function logout() {
    console.log('logout');
    localStorage.removeItem('token')
    window.location.reload()
  }


  useEffect(() => {
    console.log(users);
    let id = localStorage.getItem('id')

    let currentUser = users?.find(usr => usr._id == id);
    setUserDetails(currentUser)
    console.log(userDetails);
  }, [users])

  return (
    <>
      <Card style={{ width: '80%', backgroundColor: '#292a31', borderRadius: '15px' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className='name'>
              {userDetails?.name}
            </Typography>
            <p className='about'>About</p>
            <div className='details'>
              <div className='icon'><AccessTimeIcon /></div>
              <div className='content'>Joined in {userDetails?.createdAt ? moment(userDetails?.createdAt).format('DD.MM.YYYY') : '-'}</div>
            </div>
            <div className='details'>
              <div className='icon'><LocationOnIcon /></div>
              <div className='content'> {userDetails?.location ? userDetails?.location : '-'}</div>
            </div>
            <div className='details'>
              <div className='icon'><EmailIcon /></div>
              <div className='content'> {userDetails?.email ? userDetails?.email : '-'}</div>
            </div>
            <div className='details'>
              <div className='icon'><CakeIcon /></div>
              <div className='content'> {userDetails?.dob ? moment(userDetails?.dob).format('DD.MM.YYYY') : '-'}</div>
            </div>
            <div>      
              <button onClick={logout}>Logout</button>
              <button>Edit Profile</button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
