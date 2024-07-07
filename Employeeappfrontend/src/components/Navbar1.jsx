import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/adminhome">
          <ListItemText primary="Employee" />
        </ListItem>
        <ListItem button component={Link} to="/addemployee">
          <ListItemText primary="Add Employee" />
        </ListItem>
        <ListItem button component={Link} to="/updateemployee">
          <ListItemText primary="Update Employee" />
        </ListItem>
        <ListItem button onClick={() => { localStorage.removeItem('token'); navigate('/'); }}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ position: 'fixed', top: 0, zIndex: 999, width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            Admin Dashboard
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/adminhome" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white' }}>Employee</Button>
            </Link>
            <Link to="/addemployee" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white' }}>Add Employee</Button>
            </Link>
            <Link to="/updateemployee" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'white' }}>Update Employee</Button>
            </Link>
            <Button sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => { localStorage.removeItem('token'); navigate('/'); }}>
              Logout
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar1;
