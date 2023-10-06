import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
const TeamCard = ({ image, title, description }) => {
    return (
        <div class="col team-col col-sm-12 col-md-6 col-lg-3">
            <div class="card team-card">
                <div class="card-body team-card-body p-2">
                    <div class="team-card-head">
                        <Image src={image} alt='image' height={200} width={200} />
                    </div>
                    <div class="team-card-bottom">
                        <h4>{title}</h4>
                        <h6>VOLUNTEER</h6>
                        <div class="team-icon">
                            <Link href='/'>
                                <BiLogoFacebook size={30} />
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
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard