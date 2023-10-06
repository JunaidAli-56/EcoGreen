import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoGoogle, BiLogoFacebookCircle } from 'react-icons/bi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'

const TeamCard = ({ image, title, description }) => {
    return (
        <div class="col team-col col-sm-12 col-md-6 col-lg-3 my-3">
            <div class="card team-card p-0 border-0">
                <div class="card-body team-card-body p-2">
                    <div class="team-card-head">
                        <Image src={image} alt='image' height={200} width={200} />
                    </div>
                    <div class="team-card-bottom">
                        <h5>{title}</h5>
                        <h6 className='my-3'>VOLUNTEER</h6>
                        <div class="team-icon d-flex justify-content-evenly align-items-center">
                            <Link href='/'>
                                <BiLogoFacebookCircle size={30} />
                            </Link>
                            <Link href='/'>
                                <AiOutlineTwitter size={30} />
                            </Link>
                            <Link href='/'>
                                <AiFillYoutube size={30} />
                            </Link>
                            <Link href='/'>
                                <BiLogoGoogle size={30} />
                            </Link>
                        </div>
                        <p className='mt-3'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard