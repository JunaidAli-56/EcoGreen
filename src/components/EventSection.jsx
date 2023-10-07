import Image from 'next/image'
import React from 'react'
import { BiGroup } from 'react-icons/bi'
import { MdOutlineVolunteerActivism } from 'react-icons/md'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import EventCards from './EventCards'

const EventSection = () => {
    return (
        <div className="container event-volunteer-container py-3 py-lg-5">
            <div className="row">
                <div className="col-12 col-lg-6 image-box d-flex justify-content-center align-items-center">
                    <Image
                        className='rounded-2'
                        src='/assets/bg-4.webp' alt='image' height={600} width={600}

                    />
                </div>
                <div className="col-12 col-lg-6 content-box py-4">
                    <h6 className='text-primary'>BECOME A VOLUNTEER</h6>
                    <h1 className='my-3'>Join Our Event & Helping us by our Donation</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="container-fluid p-0 m-0 event-cards">
                        <div className="row">
                            <EventCards
                                icon={<MdOutlineVolunteerActivism size={35} className='icon' />}
                                title='Donate Now'
                            />
                            <EventCards
                                icon={<LiaProjectDiagramSolid size={35} className='icon' />}
                                title='Project Sponsor'
                            />
                            <EventCards
                                icon={<BiGroup size={35} className='icon' />}
                                title='Be A Volunteer'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection