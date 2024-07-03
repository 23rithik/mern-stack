import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axiosInstance from '../axiosinterceptor';
const Adminhome = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance.get('http://localhost:4000/api/employees')
            .then((res) => {
                console.log(res.data);
                setData(res.data); // Update state correctly
            })
            .catch((error) => {
                console.error('There was an error fetching the blog data!', error);
            });
    }, []);
    const handleDelete = async (id) => {
        try {
            await deleteEmployee(id); // Call delete function
            setData(data.filter(item => item._id !== id)); // Update state after deletion
            console.log(`Employee with ID ${id} deleted successfully.`);
        } catch (error) {   
            console.error('Error deleting employee:', error);
            alert('Error deleting employee. Please try again.');
        }
    };
    const deleteEmployee = async (id) => {
        try {
            await axiosInstance.delete(`http://localhost:4000/api/employees/${id}`);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    };

  return (
    <Box style={{ margin: '5%' }}>
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={4} > 
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.image}
                                title={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Name: {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Designation : {item.designation}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phone no : {item.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Salary : {item.salary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    E-mail id : {item.mailid}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Location : {item.location}
                                </Typography>
                            </CardContent>
                            <Button onClick={() => handleDelete(item._id)} variant="outlined" color="error" size="small">
                                Delete
                            </Button>
                            
                        </Card>
                    </Grid>
                    
                 ))}
            </Grid>
        </Box>
  )
}

export default Adminhome