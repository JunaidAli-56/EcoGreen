'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    return (
        <div
            className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-white' : 'fixed w-full h-20 z-[100]  bg-white'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src="/assets/my-logo.png" alt='/' width={100} height={100} />
                </Link>
                <div className='me-10'>
                    <ul
                        className='hidden md:flex'>
                        <li className='ml-5 text-md font-bold hover:border-b'>
                            <Link href='/' className='text-dark no-underline'>
                                Home
                            </Link>
                        </li>
                        <li className='ml-5 text-md font-bold hover:border-b'>
                            <Link href='/#about' className='text-dark no-underline'>
                                About
                            </Link>
                        </li>
                        <li className='ml-5 text-md font-bold hover:border-b'>
                            <Link href='/#skills' className='text-dark no-underline'>
                                Skills
                            </Link>
                        </li>
                        <li className='ml-5 text-md font-bold hover:border-b'>
                            <Link href='/#projects' className='text-dark no-underline'>
                                Projects
                            </Link>
                        </li>
                        <li className='ml-5 text-md font-bold hover:border-b'>
                            <Link href='/#contact' className='text-dark no-underline'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className='md:hidden' onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                        : 'fixed left-[-200%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            {/* <Link href='/'>
                                <Image src='/assets/my-logo.png' alt='/' width={95} height={95} />
                            </Link> */}
                            <div className='absolute rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer right-10' onClick={handleNav}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        {/* <div className='border-b border-gray-300 my-5'>
                            <p className='w-[85%] md:w-[90%]'>Lets build something legendary together.</p>
                        </div> */}
                    </div>
                    <div className='p-1 flex flex-col'>
                        <ul className='uppercase'>
                            <li onClick={() => { setNav(false) }} className='py-3 text-sm'>
                                <Link href='/' className='no-underline text-dark'>
                                    Home
                                </Link>
                            </li>
                            <li onClick={() => { setNav(false) }} className='py-3 text-sm'>
                                <Link href='/#about' className='no-underline text-dark'>
                                    About
                                </Link>
                            </li>
                            <li onClick={() => { setNav(false) }} className='py-3 text-sm'>
                                <Link href='/#skills' className='no-underline text-dark'>
                                    Skills
                                </Link>
                            </li>
                            <li onClick={() => { setNav(false) }} className='py-3 text-sm'>
                                <Link href='/#projects' className='no-underline text-dark'>
                                    Projects
                                </Link>
                            </li>
                            <li onClick={() => { setNav(false) }} className='py-4 text-sm'>
                                <Link href='/#contact' className='no-underline text-dark'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        {/* <div className='pt-10'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Lets connected</p>
                            <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://www.linkedin.com/in/junaid-ali-54cb'>
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/JunaidAli-56'>
                                        <FaGithub />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://mail.google.com'>
                                        <AiOutlineMail />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;