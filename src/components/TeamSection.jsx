import React from 'react'
import TeamCard from './TeamCard'
import ParagraphHeading from './ParagraphHeading'

const TeamSection = () => {
    return (
        <div class="container bg-light">
            <div class="row team-row">
                <ParagraphHeading
                    subTitle='MEET OUR VOLUNTEER'
                    title='Our Volunteer'
                />
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