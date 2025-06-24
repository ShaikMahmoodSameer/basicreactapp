import UserDetailsForm from '../components/UserDetailsForm';
import styled from 'styled-components';

function Registration() {
    return (
        <Wrapper>
            <div className='container h-100 d-flex'>
                <div className="row mx-auto align-self-center ">
                    <div className="col-md-6">
                        <img src="/Images/poster_image.png" alt="poster_image" className='w-100 posterImage' />
                    </div>
                    <div className="col-md-6 d-flex ps-md-5 py-md-0 py-5">
                        <div className="align-self-center">
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
.container .row{ width: 75%; }
.posterImage{
    border: 4px solid white;
    border-radius: 15px;
}

@media only screen and (max-width: 600px) {
    background-image: linear-gradient(to bottom, #A2C03E 35%, white 35%);
    padding: 20px;
    height: auto;
    .container .row{ width: 100%; }
}
`