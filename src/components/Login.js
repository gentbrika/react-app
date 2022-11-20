import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import './login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    let URL = 'http://localhost:3001/api/v1/';
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/')
        }
      });

    const handleSubmit = event => {
        let data = { email: emailInput, password: passwordInput }
        axios.post(`${URL}auth/login`, data).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.id);
            navigate("/")
        });
        event.preventDefault();
    };

    return (

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
                                placeholder='Email'
                                className='email'
                                onChange={event => setEmail(event.target.value)}
                                value={emailInput}
                            /><br />
                            <TextField
                                type='password'
                                placeholder='Password'
                                className='password'
                                onChange={event => setPassword(event.target.value)}
                                value={passwordInput}
                            />
                            <CardActions>
                                <Button variant="outlined" className="submit" type="submit">Submit</Button><br/>
                                <Button
                                    type='button'
                                    variant="outlined"
                                    onClick={() => { navigate("/register");  }}
                                >
                                    Register
                                </Button>
                            </CardActions>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    )
}

export default Login