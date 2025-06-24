import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    qualification: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form validation or submission logic here
  };

  return (
    <Container maxWidth="sm" className='p-0'>
      {/* <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}> */}
        <Typography variant="h4" gutterBottom>
          User Registeration Form
        </Typography>
        <img src="/Images/devider.png" alt="divider" className='devider1 mb-4' />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="fullName"
                label="Full Name"
                fullWidth
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="city"
                label="City"
                fullWidth
                required
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="qualification"
                label="Qualification"
                fullWidth
                required
                value={formData.qualification}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="designation"
                label="Designation"
                fullWidth
                required
                value={formData.designation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      {/* </Box> */}
    </Container>
  );
};

export default UserDetailsForm;
