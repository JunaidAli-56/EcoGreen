import React from 'react'
import CampaignsCard from './CampaignsCard'
import ParagraphHeading from './ParagraphHeading'

export const Campaigns = () => {
    return (
        <div className="container campaigns-container">
            <div className="row">
                <ParagraphHeading
                    subTitle='PROJECTS'
                    title='Our Campaign'

                />
                <div className="col">
                    <div className="container bg-light campaigns-card-container">
                        <div className="row">
                            <CampaignsCard
                                index={1}
                                image='/assets/image-3.webp'
                                title='ECOLOGY'
                                subTitle='Ecological Friendly'
                                description='Far from the countries Vokalia and Consonantia.'
                                raisedVal={9800}
                                goalVal={15000}
                            />
                            <CampaignsCard
                                index={2}
                                image='/assets/bg-1.webp'
                                title='PLANTING'
                                subTitle='Planting Trees'
                                description='Far from the countries Vokalia and Consonantia.'
                                raisedVal={6600}
                                goalVal={13000}
                            />
                            <CampaignsCard
                                index={3}
                                image='/assets/gallery-3.webp'
                                title='WATER'
                                subTitle='Water Pollution'
                                description='Far from the countries Vokalia and Consonantia.'
                                raisedVal={7800}
                                goalVal={19000}
                            />
                            <CampaignsCard
                                index={4}
                                image='/assets/gallery-4.webp'
                                title='ECOLOGY'
                                subTitle='Planting More Trees'
                                description='Far from the countries Vokalia and Consonantia.'
                                raisedVal={4400}
                                goalVal={12000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
