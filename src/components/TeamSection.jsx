import React from 'react'
import TeamCard from './TeamCard'
import ParagraphHeading from './ParagraphHeading'

const TeamSection = () => {
    return (
        <div className="container-fluid p-0 bg-light">
            <div class="container ">
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
                        image='/assets/staff-2.webp'
                        title='Jeffrey'
                        description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                    />
                    <TeamCard
                        image='/assets/staff-3.webp'
                        title='Emma Hunt'
                        description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                    />
                    <TeamCard
                        image='/assets/staff-4.webp'
                        title='Tom Wood'
                        description='I am an ambitious workaholic, but apart from that, pretty simple person.'
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamSection