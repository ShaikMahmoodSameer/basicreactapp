import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3220/walkathon-registration', formData);
            console.log("Server response:", response.data);
            setFormData({ fullName: '', qualification: '', designation: '', email: '', phone: '', city: '' }); // Rest Form Data
        } catch(err){
            console.log(err)
        }
    };

    return (
        <Container maxWidth="sm" className='p-0'>
            <Typography variant="h4" gutterBottom className='txt_secondary_color'>
                User Registeration Form
            </Typography>
            <img src="/Images/devider.png" alt="divider" className='devider1 mb-4' />
            <form onSubmit={handleSubmit} className='g-2'>
                <TextField
                    name="fullName"
                    label="Full Name"
                    fullWidth
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className='w-50 pe-1'
                />
                <TextField
                    name="city"
                    label="City"
                    fullWidth
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className='w-50'
                />
                <TextField
                    name="qualification"
                    label="Qualification"
                    fullWidth
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    className='w-50 py-1 pe-1'
                />
                <TextField
                    name="designation"
                    label="Designation"
                    fullWidth
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    className='w-50 py-1'
                />
                <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-50 pe-1'
                />
                <TextField
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-50'
                />
                <Button type="submit" variant="contained" fullWidth className='mt-2 bg_secondary_color'>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default UserDetailsForm;
