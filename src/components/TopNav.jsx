import React from 'react'
import HeadingComponent from './HeadingComponent'
import { FiMap } from 'react-icons/fi'
import { BsTelephoneInbound } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'  

const TopNav = () => {
    return (
        <div className="container-fluid bg-dark top-nav-container">
            <div className="container py-3">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <HeadingComponent />
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12  mt-3 mt-lg-0">
                        <div className="container top-nav-contact-container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 d-flex mb-lg-0 mb-md-0 mb-3">
                                    <FaRegEnvelope size={30} className='contact-icon' />
                                    <div className='contact-content'>
                                        <h6>Email</h6>
                                        <p>info@mail.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 d-flex mb-lg-0 mb-md-0 mb-3">
                                    <BsTelephoneInbound size={30} className='contact-icon' />
                                    <div className='contact-content'>
                                        <h6>Call Us </h6>
                                        <p>+2 392 3929 210</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 d-flex mb-lg-0 mb-md-0 mb-3">
                                    <FiMap size={30} className='contact-icon' />
                                    <div className='contact-content'>
                                        <h6>Email</h6>
                                        <p>info@mail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNav;
