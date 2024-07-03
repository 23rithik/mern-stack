import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axiosInstance from '../axiosinterceptor';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    mailid: '',
    location: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('http://localhost:4000/api/addusers', form);
      alert(res.data.message);
      // Optionally, redirect user to login page or perform other actions upon successful signup
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert('Error submitting the form. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div style={{ margin: '5%', marginLeft: '40%', marginRight: '15%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 style={{ color: 'black' }}>Employee APP</h1>
          <h2 style={{ color: 'black' }}>USER SIGNUP</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-name"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-mailid"
            label="Email id"
            name="mailid"
            value={form.mailid}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-location"
            label="Location"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-password"
            type="password"
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={handleSubmit}>Sign up</Button>
        </Grid>
        <Grid item xs={12}>
          <p style={{ color: 'black' }}>
            Already have an account?{' '}
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Button variant="text">Login</Button>
            </Link>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
