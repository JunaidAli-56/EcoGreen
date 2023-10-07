'use client'
import Link from 'next/link'
import React from 'react'

const HeadingComponent = () => {
    return (
        <div className='heading-component'>
            <Link href='/' className='text-decoration-none'>
                <h2 className='text-uppercase text-white'>eco<span className='text-primary'>green</span></h2>
                <h6 className='text-uppercase heading-para'>enviornment theme</h6>
            </Link>
        </div>
    )
}

export default HeadingComponent