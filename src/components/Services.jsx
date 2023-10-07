import React from 'react'
import { FaRecycle, FaSolarPanel } from 'react-icons/fa'
import { GiElephant } from 'react-icons/gi'
import { MdOutlineWaterDrop } from 'react-icons/md'
import ServicesCard from './ServicesCard'
import ParagraphHeading from './ParagraphHeading'
const Services = () => {
    return (
        <div className="container services-container">
            <div className="row">
                <ParagraphHeading
                    subTitle='Services'
                    title='Over 40K+ People Working with us'
                />
                <div className="col">
                    <div className="container services-card-container">
                        <div className="row">
                            <ServicesCard
                                icon={<FaRecycle size={45} className='icon' />}
                                title="Recyling"
                                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
                            />
                            <ServicesCard
                                icon={<MdOutlineWaterDrop size={45} className='icon' />}
                                title="Water Refine"
                                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
                            />
                            <ServicesCard
                                icon={<GiElephant size={45} className='icon' />}
                                title="Save Animals"
                                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
                            />
                            <ServicesCard
                                icon={<FaSolarPanel size={45} className='icon' />}
                                title="Solar Energy"
                                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services