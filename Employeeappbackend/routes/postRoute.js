const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Employeedata = require('../model/Employeedata');

router.use(express.json());

// GET all employees
router.get('/employees', async (req, res) => {
  try {
    const data = await Employeedata.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching Employees', error);
    res.status(500).json({ error: 'Data not found' });
  }
});

// POST route for adding a new employee
router.post('/addemployee', async (req, res) => {
  try {
    const post = req.body;
    const data = await new Employeedata(post).save();
    res.status(201).json({ message: 'Employee added', data });
    console.log('Employee added:', data);
  } catch (error) {
    console.error('Error adding employee', error);
    res.status(400).json({ error: 'Error adding employee' });
  }
});

router.post('/addusers', async (req, res) => {
    try {
      const post = req.body;
      const data = await new userdata(post).save();
      res.status(201).json({ message: 'Employee added', data });
      console.log('Employee added:', data);
    } catch (error) {
      console.error('Error adding employee', error);
      res.status(400).json({ error: 'Error adding employee' });
    }
  });
// PUT route for updating an employee
router.put('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const updatedEmployee = req.body;

  try {
    const result = await Employeedata.findByIdAndUpdate(id, updatedEmployee, { new: true });
    if (!result) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully', data: result });
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Error updating employee' });
  }
});

// DELETE route for deleting an employee
router.delete('/employees/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Employeedata.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Error deleting employee' });
  }
});

module.exports = router;
