import React from 'react'
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import './navbar.css'

function Navbar() {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
      }
  return (
    <>
    <div className='navbar'>
        <div className='left-side'>
            <HomeIcon className='icon home'/>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
        </div>
        <div className='right-side'>
            <PersonIcon style={{fontSize: "35px", marginRight: "10px"}}/>
            <ChatIcon style={{fontSize: "35px", marginLeft: "10px"}}/>
        </div>
        {/* <button onClick={logout}>Logout</button> */}
    </div>
    </>
  )
}

export default Navbar