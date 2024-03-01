'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { AiOutlineMenu } from 'react-icons/ai'
// import { BiMenu } from 'react-icons/bi'
// import { PiHandHeart, PiHandHeartBold } from 'react-icons/pi'


// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="nav-button">
//                 <button className="donate-btn d-flex">
//                     <PiHandHeart size={28} className='ms-3 me-2 button' />
//                     Donate Now!
//                 </button>
//             </div>
//             <input type="checkbox" id="click" />
//             <label htmlFor="click" className="menu-btn d-flex align-items-center">
//                 <AiOutlineMenu size={28} className='menu-button me-2' />
//                 <span className='text-white fs-3'>Menu</span>
//             </label>
//             <ul>
//                 <li><Link href="#">Home</Link></li>
//                 <li><Link href="#">About</Link></li>
//                 <li><Link href="#">Service</Link></li>
//                 <li><Link href="#">Project</Link></li>
//                 <li><Link href="#">Blogs</Link></li>
//                 <li><Link href="#">Contact</Link></li>
//             </ul>
//         </div>
//     )
// }

// export default Navbar;

import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'
import { PiHandHeart, PiHandHeartBold } from 'react-icons/pi'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [showSideMenu, setShowSideMenu] = useState(false);

    const openSideMenu = () => {
        setShowSideMenu(true);
    };

    const closeSideMenu = () => {
        setShowSideMenu(false);
    };

    return (
        <div className="navbar">
            <div className="nav-button">
                <button className="donate-btn d-flex">
                    <PiHandHeart size={28} className='ms-3 me-2 button' />
                    Donate Now!
                </button>
            </div>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn d-flex align-items-center">
                {showSideMenu ? <AiOutlineClose size={28} className='menu-button me-2' onClick={closeSideMenu} /> : <AiOutlineMenu size={28} className='menu-button me-2' onClick={openSideMenu} />}
                <span className='text-white fs-3'>Menu</span>
            </label>
            <ul className={showSideMenu ? 'show' : ''}>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Service</Link></li>
                <li><Link href="#">Project</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
