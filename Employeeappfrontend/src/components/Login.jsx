import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const capValue = () => {
    // Check if email is admin email
    if (user.email === 'admin@gmail.com') {
      axios.post('http://localhost:4000/user/login1', user)
        .then((res) => {
          alert(res.data.message);
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            navigate('/adminhome');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('Login failed. Please try again.');
        });
    } else {
      axios.post('http://localhost:4000/user/login', user)
        .then((res) => {
          alert(res.data.message);
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            navigate('/userhome');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('Login failed. Please try again.');
        });
    }
  };

  return (
    <Box 
      component="form"
      style={{ margin: '5%', marginLeft: '40%', marginRight: '15%' }}
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ marginTop: '-4%' }}>
        <h1 style={{ color: 'black' }}>EMPLOYEE APP</h1>
        <h2 style={{ color: 'black' }}>LOGIN</h2>
      </div>
      <div style={{ marginTop: '5%' }}>
        <TextField
          required
          id="outlined-email"
          type='email'
          label="Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-password"
          type='password'
          label="Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <div>
        <Button variant="outlined" onClick={capValue}>Login</Button>
      </div>
      {/* <div style={{ marginTop: "2%" }}>
        <p style={{ color: 'black' }}>
          Don't have an account?
          <Link to={'/signup'} style={{ textDecoration: 'none' }}>
            <Button variant="text">Signup</Button>
          </Link>
        </p>
      </div> */}
    </Box>
  );
}

export default Login;
