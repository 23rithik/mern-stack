import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, TextField } from '@mui/material';
import axiosInstance from '../axiosinterceptor';

const UpdateEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams(); // Ensure 'id' matches the parameter name specified in your route

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:4000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleChange = (e, employeeId) => {
    const { name, value } = e.target;
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee._id === employeeId ? { ...employee, [name]: value } : employee
      )
    );
  };

  const handleUpdate = async (employeeId) => {
    try {
      const employeeToUpdate = employees.find((employee) => employee._id === employeeId);
      if (!employeeToUpdate) {
        console.error('Employee not found for update');
        return;
      }

      const response = await axiosInstance.put(`http://localhost:4000/api/employees/${employeeId}`, employeeToUpdate);
      console.log('Update response:', response.data); // Handle success scenario
      // Optionally, you can show a success message or redirect
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Error updating employee. Please try again.');
    }
  };

  return (
    <div style={{ margin: '5%', marginLeft: '40%', marginRight: '15%' }}>
      {employees.map((employee) => (
        <Grid key={employee._id} container spacing={2}>
          <Grid item xs={12}>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id={`outlined-name-${employee._id}`}
              label="Employee Name"
              name="name"
              value={employee.name}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id={`outlined-mailid-${employee._id}`}
              label="Email id"
              name="mailid"
              value={employee.mailid}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id={`outlined-designation-${employee._id}`}
              label="Designation"
              name="designation"
              value={employee.designation}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id={`outlined-phone-${employee._id}`}
              type="number"
              label="Phone no"
              name="phone"
              value={employee.phone}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id={`outlined-location-${employee._id}`}
              label="Location"
              name="location"
              value={employee.location}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id={`outlined-salary-${employee._id}`}
              type="number"
              label="Salary"
              name="salary"
              value={employee.salary}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id={`outlined-image-url-${employee._id}`}
              label="Image URL"
              name="image"
              value={employee.image}
              onChange={(e) => handleChange(e, employee._id)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => handleUpdate(employee._id)}>
              Update
            </Button>
          </Grid>
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default UpdateEmployee;
