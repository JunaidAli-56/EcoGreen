'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { PiHandHeart, PiHandHeartBold } from 'react-icons/pi'


const Navbar = () => {
    return (
        <div class="navbar">
            <div class="nav-button">
                <button class="donate-btn d-flex">
                    <PiHandHeart size={28} className='mx-3 button'/>
                    Donate Now!
                </button>
            </div>
            <input type="checkbox" id="click" />
            <label for="click" class="menu-btn d-flex align-items-center">
                <AiOutlineMenu size={28} className='menu-button me-2'/> 
                <span className='text-white fs-3'>Menu</span>
            </label>

            <ul>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Service</Link></li>
                <li><Link href="#">Project</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;