// import React from 'react';
// import Image from 'next/image';
// import logo from '../../../../public/logo.png';
// import Wrapper from '@/shared/Wrapper';
// import Link from 'next/link';

// const Header = () => {
//     return (
//         <header>

//             <Wrapper>
//                 <div className=' flex items-center justify-between text-white '>
//                     {/*Logo*/}
//                     <Link className='hover: text-teal-700 duration-300' href={"/"}>

//                         <div className='w-28 h-28 relative top-2.5'>
//                             <Image src={logo} alt='Logo' />
//                         </div>
//                     </Link>
//                     {/*Navigation bar*/}

//                     <ul className='flex gap-20 pr-16 '>
//                         <Link className='hover:text-gray-500   duration-300 ' href={"/sections/Hero"}><li>Home</li></Link>
//                         <Link className='hover:text-gray-500   duration-300' href={"/sections/Projects"}><li>Projects</li></Link>
//                         <Link className='hover:text-gray-500   duration-300' href={""}><li>Clients</li></Link>
//                         <Link className='hover:text-gray-500   duration-300' href={""}><li>Contact us</li></Link>
//                         <Link className='hover:text-gray-500   duration-300' href={""}><li>About us</li></Link>
//                     </ul>


//                 </div>
//             </Wrapper>
//         </header>
//     );
// }

// export default Header;


import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import Wrapper from '@/shared/Wrapper';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <Wrapper>
                <div className='flex items-center justify-between text-white'>
                    {/* Logo */}
                    <Link href="/" className='hover:text-teal-700 duration-300'>
                        <div className='w-28 h-28 relative top-2.5'>
                            <Image src={logo} alt='Logo' />
                        </div>

                    </Link>

                    <ul className='flex gap-20 pr-16 '>
                        <li>
                            <Link href="/#home" className='hover:text-gray-500 duration-300'>Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#projects" className='hover:text-gray-500 duration-300'>Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/#clients" className='hover:text-gray-500 duration-300'>Clients
                            </Link>
                        </li>
                        <li>
                            <Link href="/#team" className='hover:text-gray-500 duration-300'>Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contactus" className='hover:text-gray-500 duration-300'>Contact us
                            </Link>
                        </li>

                        <li>
                            <Link href="/#footer" className='hover:text-gray-500 duration-300'>About us
                            </Link>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </header>
    );
}

export default Header;
