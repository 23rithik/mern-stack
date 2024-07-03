import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import axiosInstance from '../axiosinterceptor';

const Addemployee = () => {
  const [form, setForm] = useState({
    name: '',
    mailid: '',
    image: '',
    designation: '',
    phone: '',
    location: '',
    salary: ''
  });

  const capValue = async () => {
    try {
      const res = await axiosInstance.post('http://localhost:4000/api/addemployee', form);
      alert(res.data.message);
      
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
          <h1 style={{ color: 'black' }}>Add Employee</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-name"
            label="Employee Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ width: '100%', margin: 0, padding: 0 }}
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
            sx={{ width: '100%', margin: 0, padding: 0 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-designation"
            label="Designation"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            sx={{ width: '100%', margin: 0, padding: 0 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-phone"
            type="number"
            label="Phone no"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            sx={{ width: '100%', margin: 0, padding: 0 }}
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
            sx={{ width: '100%', margin: 0, padding: 0 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="outlined-salary"
            type="number"
            label="Salary"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            sx={{ width: '100%', margin: 0, padding: 0 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="outlined-image-url"
            label="Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={capValue}>Add</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Addemployee;
