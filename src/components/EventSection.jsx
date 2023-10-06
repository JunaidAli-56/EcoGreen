import Image from 'next/image'
import React from 'react'
import { FaRecycle } from 'react-icons/fa'

const EventSection = () => {
    return (
        <div className="conatiner event-volunteer-container">
            <div className="row m-0 p-0">
                <div className="col-6 image-box">
                    <Image src='/assets/bg-4.webp' alt='image' height={600} width={600} />
                </div>
                <div className="col-6 content-box py-2">
                    <h6 className='text-primary'>BECOME A VOLUNTEER</h6>
                    <h1 className='my-3'>Join Our Event & Helping us by our Donation</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="container-fluid p-0 m-0 event-cards">
                        <div className="row">
                            <div className="col-4 event-card my-3">
                                <div className="card border-0">
                                    <div class="event-icon-bg">
                                        <FaRecycle size={45} className='icon' />
                                    </div>
                                    <h5 className='mt-2'>Donate Now</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection