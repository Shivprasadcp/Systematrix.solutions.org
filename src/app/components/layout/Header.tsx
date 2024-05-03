// import React from 'react';
// import Image from 'next/image';
// import logo from '../../../../public/logo.png';
// import Wrapper from '@/shared/Wrapper';
// import Link from 'next/link';

// const Header = () => {  

//     return (
//         <header>
//             <Wrapper>
//                 <div className='flex flex-col lg:flex-row items-center justify-between text-white'>
//                     {/* Logo */}
//                     <Link href="/" className='hover:text-teal-700 duration-300'>
//                         <div className='w-28 h-28 lg:w-36 lg:h-36 relative top-2.5'>
//                             <Image src={logo} alt='Logo' />
//                         </div>
//                     </Link>

//                     {/* Navigation */}
//                     <ul className='flex flex-row flex-wrap lg:flex-row gap-4 lg:gap-20 pr-1 '>
//                         <li>
//                             <Link href="/#home" className='hover:text-gray-500 duration-300'>Home</Link>
//                         </li>
//                         <li>
//                             <Link href="/#projects" className='hover:text-gray-500 duration-300'>Projects</Link>
//                         </li>
//                         <li>
//                             <Link href="/#clients" className='hover:text-gray-500 duration-300'>Clients</Link>
//                         </li>
//                         <li>
//                             <Link href="/#team" className='hover:text-gray-500 duration-300'>Team</Link>
//                         </li>
//                         <li>
//                             <Link href="/#contactus" className='hover:text-gray-500 duration-300'>Contact us</Link>
//                         </li>
//                         <li>
//                             <Link href="/#footer" className='hover:text-gray-500 duration-300'>About us</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </Wrapper>
//         </header>
//     );
// }

// export default Header;

'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import Wrapper from '@/shared/Wrapper';
import Link from 'next/link';
import { useState } from 'react';
import x from '../../../assets/x.png'
import menu from '../../../assets/menu.png'

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    return (

        <header>
            <Wrapper>

                <div className='flex flex-col lg:flex-row items-center justify-between text-white'>
                    {/* Logo */}

                    {/* <div className='flex flex-row justify-items-center border-2 border-white '>
                        <Link href="/" className='hover:text-teal-700 duration-300'>
                            <div className='w-28 h-28 lg:w-36 lg:h-36 relative top-2.5'>
                                <Image src={logo} alt='Logo' />
                            </div>
                        </Link>

                        <div className='  lg:hidden'>
                            <button className=' flex flex-row justify-between ' onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <Image className='flex bottom-0' src={x} alt='' />
                                ) :
                                    (
                                        <Image src={menu} alt='' />
                                    )}

                            </button>

                        </div>
                    </div> */}

                    <div className='flex flex-row gap-48 justify-between items-center '>
                        <Link href="/" className='hover:text-teal-700 duration-300'>
                            <div className='w-10 h-14  relative top-2.5'>
                                <Image src={logo} alt='Logo' />
                            </div>
                        </Link>

                        {/* Button for mobile navigation */}
                        <div className='lg:hidden'>
                            <button className='flex flex-row justify-between items-center' onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <Image className='flex bottom-0' src={x} alt='Close menu' />
                                ) : (
                                    <Image src={menu} alt='Open menu' />
                                )}
                            </button>
                        </div>
                    </div>


                    <div className={`${navbar ? 'block' : 'hidden'} lg:flex lg:items-center`}>
                        <ul className='flex flex-col  flex-wrap  lg:flex-row  gap-4 lg:gap-20 pr-1 '>
                            <li>
                                <Link href="/#home" className='hover:text-gray-500 duration-300' onClick={() => setNavbar(!navbar)}>Home</Link>
                            </li>
                            <li>
                                <Link href="/#projects" className='hover:text-gray-500 duration-300' onClick={() => setNavbar(!navbar)}>Projects</Link>
                            </li>
                            <li>
                                <Link href="/#clients" className='hover:text-gray-500 duration-300' onClick={() => setNavbar(!navbar)}>Clients</Link>
                            </li>
                            <li>
                                <Link href="/#team" className='hover:text-gray-500 duration-300' onClick={() => setNavbar(!navbar)}>Team</Link>
                            </li>
                            <li>
                                <Link href="/#contactus" className='hover:text-gray-500 duration-300' onClick={() => setNavbar(!navbar)}>Contact us</Link>
                            </li>
                            <li>
                                <Link href="/#footer" className='hover:text-gray-500 duration-300' onClick={() => setNavbar(!navbar)}>About us</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Navigation */}

                </div>
            </Wrapper>
        </header>
    );
}

export default Header;
