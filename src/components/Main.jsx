import Image from 'next/image';
import React from 'react';

const Main = () => {
    return (
        <div className="container-fluid main-section bg-dark p-0 m-0">
            <div className="row d-flex justify-content-center align-items-center p-0 m-0 relative"
                style={{
                    backgroundImage: `url("/assets/bg-1.webp")`,
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="col d-flex flex-col justify-content-center align-items-center my-auto absolute">
                    <h6 className='text-uppercase text-primary fw-bold py-3 px-4 my-3 my-lg-4'>save the world</h6>
                    <h1 className='text-uppercase text-white fw-bold'>help us to save animals</h1>
                    <p className='fw-normal my-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className='btn btn-primary text-white px-4 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Main;
;