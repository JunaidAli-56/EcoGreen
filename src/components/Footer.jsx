'use client'
import Link from 'next/link';
import React from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebookCircle, BiLogoGoogle } from 'react-icons/bi';
import { FiMap } from 'react-icons/fi';
import { BsTelephoneInbound } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container py-5  footer-conatiner">
                <div className="inner-footer-div ">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card footer-social-card border-0">
                                <p className='my-3'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <div className="d-flex social-icons-box">
                                    <Link href='/'>
                                        <BiLogoFacebookCircle size={28} className='social-icon' />
                                    </Link>
                                    <Link href='/'>
                                        <BiLogoGoogle size={30} className='social-icon' />
                                    </Link>
                                    <Link href='/'>
                                        <AiOutlineTwitter size={30} className='social-icon' />
                                    </Link>
                                    <Link href='/'>
                                        <AiFillYoutube size={30} className='social-icon' />
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card card-links border-0" >
                                <h4>Services</h4>
                                <ul className="list-group  border-0">
                                    <li className="list-group-item border-0"> <Link href="#">Recyling</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#">Water Refine</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#">Ecosystem</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#">Documentation</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#">Solar Energy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card card-links border-0" >
                                <h4>Recent Post</h4>
                                <ul className="list-group list-group-flush border-0">
                                    <li className="list-group-item border-0"> <Link href="#"> Utilities</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#"> Component</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#"> Layout</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#"> Code Sample</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#"> Products</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#"> Affilates</Link></li>
                                    <li className="list-group-item border-0"> <Link href="#"> Updates</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card card-links border-0" >
                                <h4>Have a Questions?</h4>
                                <ul className="list-group list-group-flush border-0">

                                    <li className="list-group-item border-0">
                                        <div className="footer-end-col">
                                            <FiMap size={32} className='contact-icons' />
                                            <Link href="#"> 203 Fake St. Mountain View, San Francisco, California, USA</Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="footer-end-col">
                                            <BsTelephoneInbound size={23} className='contact-icons' />
                                            <Link href="#"> +92 123 456 7890</Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="footer-end-col">
                                            <FaRegEnvelope size={23} className='contact-icons' />
                                            <Link href="#"> junxid@gmail.com</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className='text-primary' />
                        <div className="contanier copyright-container mt-4 d-flex justify-content-between align-items-center">
                            <h6>Copyright © Your Website 2022</h6>
                            <div>
                                <Link href="#">Privacy Policy</Link> . <Link href="#">Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;