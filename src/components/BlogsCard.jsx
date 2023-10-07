import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidCalendar, BiSolidUser } from 'react-icons/bi'
import { BsFillChatFill } from 'react-icons/bs'
import { HiLink } from 'react-icons/hi'
const BlogsCard = ({ index, image, title, description }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className={`card blog-card border-0 ${index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}`}>
                <div className={`card-media d-flex justify-content-center align-items-center ${index % 2 === 0 ? 'mt-3' : 'mb-3'}`}>
                    <Image
                        className='rounded-2'
                        src={image} alt='img' height={400} width={400}
                    />
                </div>
                <div className='card-body p-0 m-0 card-content'>
                    <div className='d-flex justify-content-end'>
                        <div className='link-box'>
                            <HiLink size={20} className='link-icon' />
                        </div>
                    </div>
                    <div className='d-flex flex-wrap'>
                        <Link href='/' className='d-flex align-items-center me-2 top-links'>
                            <BiSolidUser size={16} className='text-primary me-1' />Admin
                        </Link>
                        <Link href='/' className='d-flex align-items-center me-2 top-links'>
                            <BiSolidCalendar size={16} className='text-primary me-1' />FEB. 22, 2023
                        </Link>
                        <Link href='/' className='d-flex align-items-center me-2 top-links'>
                            <BsFillChatFill size={16} className='text-primary me-1' />3 Comments
                        </Link>
                    </div>
                    <Link href='/' className='text-decoration-none blog-link'>
                        <h5 className='my-3'>{title}</h5>
                    </Link>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsCard