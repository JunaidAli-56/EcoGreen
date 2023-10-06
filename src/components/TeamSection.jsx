import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import TeamCard from './TeamCard'

const TeamSection = () => {
    return (
        <div class="container">
            <div class="row team-row">
                <TeamCard
                    image='/assets/staff-1.webp'
                    title='Jason Smith'
                    description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                />
                <TeamCard
                    image='/assets/staff-1.webp'
                    title='Jeffrey'
                    description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                />
                <TeamCard
                    image='/assets/staff-1.webp'
                    title='Emma Watson'
                    description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                />
                <TeamCard
                    image='/assets/staff-1.webp'
                    title='Tom Brack'
                    description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                />
            </div>
        </div>
    )
}

export default TeamSection