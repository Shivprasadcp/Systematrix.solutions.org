import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import Wrapper from '@/shared/Wrapper';
import Link from 'next/link';

const Header = () => {
    return (
        <header>

            <Wrapper>
                <div className=' flex items-center justify-between text-white '>
                    {/*Logo*/}
                    <Link className='hover: text-teal-700 duration-300' href={"/"}>

                        <div className='w-28 h-28 relative top-2.5'>
                            <Image src={logo} alt='Logo' />
                        </div>
                    </Link>
                    {/*Navigation bar*/}

                    <ul className='flex gap-20 pr-16 '>
                        <Link className='hover:text-gray-500   duration-300 ' href={""}><li>Home</li></Link>
                        <Link className='hover:text-gray-500   duration-300' href={""}><li>Projects</li></Link>
                        <Link className='hover:text-gray-500   duration-300' href={""}><li>Clients</li></Link>
                        <Link className='hover:text-gray-500   duration-300' href={""}><li>Contact us</li></Link>
                        <Link className='hover:text-gray-500   duration-300' href={""}><li>About us</li></Link>
                    </ul>


                </div>
            </Wrapper>
        </header>
    );
}

export default Header;
