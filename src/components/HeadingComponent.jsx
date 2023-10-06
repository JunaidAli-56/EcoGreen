'use client'
import React from 'react'

const HeadingComponent = ({ title, mainTitle }) => {
    return (
        <>
            <h4 className='text-uppercase text-primary'>{title}</h4>
            <h3 className='pt-1'>{mainTitle}</h3>
        </>
    )
}

export default HeadingComponent