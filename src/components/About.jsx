import Image from 'next/image'
import React from 'react'
import { MdOutlineVolunteerActivism } from 'react-icons/md'

const About = () => {
    return (
        <div className="container about-container py-3 py-lg-5">
            <div className="row">
                <div className="col-12 col-lg-6 image-box d-flex justify-content-center align-items-center">
                    <Image
                        className='rounded-2'
                        src='/assets/about.webp' 
                        alt='image' height={600} width={600}
                    />
                </div>
                <div className="col-12 col-lg-6 content-box py-4">
                    <h6 className='text-primary'>BECOME A VOLUNTEER</h6>
                    <h1 className='my-4'>Do You Care Our Mother Earth Like We Do?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p className='my-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className="container my-4 donation-box bg-white">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <MdOutlineVolunteerActivism size={80} className='icon text-primary' />
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 my-2 my-lg-0">
                                <h3 className='text-primary'>$920,000</h3>
                                <p className='my-2'>FUNDS RAISED BY 1200 PEOPLE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About