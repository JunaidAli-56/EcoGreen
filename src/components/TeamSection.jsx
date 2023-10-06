import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

const TeamSection = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row p-0 m-0 volunteer-row">
                <div class="col volunteer-col col-sm-12 col-md-6 col-lg-3">
                    <div class="card volunteer-card">
                        <div class="card-body volunteer-card-body p-2">
                            <div class="volunteer-card-head">
                                <Image src='/assets/staff-1.webp' alt='image' height={200} width={200} />
                            </div>
                            <div class="volunteer-card-bottom">
                                <h4>Jason Smith</h4>
                                <h6>VOLUNTEER</h6>
                                <div class="volunteer-icon">
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
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection