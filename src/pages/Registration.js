import React from 'react';
import UserDetailsForm from '../components/UserDetailsForm';
// import Typography from '@mui/material/Typography';
import styled from 'styled-components';

function Registration() {
    return (
        <Wrapper>
            <div className='container h-100 d-flex'>
                <div className="row w-75 mx-auto align-self-center">
                    <div className="col-md-6">
                        <img src="/Images/poster_image.png" alt="poster_image" className='w-100' />
                    </div>
                    <div className="col-md-6 d-flex ps-5">
                        <div className="align-self-center">
                            {/* <Typography variant="h3" gutterBottom>Register</Typography> */}
                            <UserDetailsForm />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Registration

const Wrapper = styled.div`
background-image: linear-gradient(to right, #A2C03E 35%, white 35%);
height: 100vh;
`