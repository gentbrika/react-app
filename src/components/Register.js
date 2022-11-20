import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import './register.css';
import axios from "axios";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from "react-router-dom";

function Register() {
    let URL = 'http://localhost:3001/api/v1/';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/')
        }
      });

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleSubmit = event => {
        console.log(value);
        let data = { email: email, password: password, name: name, dob: value }
        axios.post(`${URL}auth/register`, data).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.id);
            navigate("/");
        });
        event.preventDefault(); 
      };

    return (
        <>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                type='text'
                                placeholder='Name'
                                className='name'
                                onChange={event => setName(event.target.value)}
                                value={name}
                            /><br />
                            <TextField 
                                type='text' 
                                placeholder='Email' 
                                className='email' 
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                            /><br />
                            <TextField 
                                type='password' 
                                placeholder='Password' 
                                className='password' 
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                            />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    className='date'
                                    label="Date of birth"
                                    inputFormat="MM-DD-YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            
                            <CardActions className='buttons'>
                                <Button variant="outlined" className="submit" type="submit">Submit</Button><br/><br/>
                                <Button type='button' variant="outlined"
                                    onClick={() => { navigate("/login");  }}
                                >
                                    Login
                                </Button>
                            </CardActions>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>
    )
}

export default Register