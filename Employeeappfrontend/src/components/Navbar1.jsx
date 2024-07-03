import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ position: 'fixed', top: 0, zIndex: 999, width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Link to={'/adminhome'} style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>Employee</Button>
          </Link>
          <Link to={'/addemployee'} style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>Add Employee</Button>
          </Link>
          <Link to={'/updateemployee'} style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>Update Employee</Button>
          </Link>
          <Button
            style={{ color: 'white', marginLeft: 'auto' }}
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/'); // Correctly use navigate as a function
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar1;
