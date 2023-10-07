import React from 'react'

const ParagraphHeading = ({ subTitle, title }) => {
    return (
        <div className='paragraph-heading py-3 py-lg-5'>
            <h6 className='text-primary text-uppercase text-center fw-medium'>{subTitle}</h6>
            <h1 className='text-center fw-medium py-2'>{title}</h1>
        </div>
    )
}

export default ParagraphHeading