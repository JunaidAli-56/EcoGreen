import React from 'react'
import Button from './Button'
import Image from 'next/image'
const CampaignsCard = ({ index, image, title, subTitle, description, raisedVal, goalVal }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3 ">
            <div className={`card border-0 p-3 rounded-4 campaigns-card ${index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}`}>
                <div className={`card-media d-flex justify-content-center align-items-center `}>
                    <Image
                        className='rounded-2'
                        src={image} alt='img' height={400} width={400}
                    />
                </div>
                <div className='card-body p-0 m-0 card-content'>
                    <h6 className='text-primary'>{title}</h6>
                    <h5 className='my-2'>{subTitle}</h5>
                    <p>{description}</p>
                    <div className='d-flex justify-content-between my-2'>
                        <p className='text-black'>Raised <span className='text-primary'>{`$${raisedVal}`}</span></p>
                        <p className='text-black'>Goal <span className='text-primary'>{`$${goalVal}`}</span></p>
                    </div>
                    <Button title='Donate Now' />
                </div>
            </div>
        </div>
    )
}

export default CampaignsCard