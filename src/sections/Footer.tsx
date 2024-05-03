import Wrapper from '@/shared/Wrapper';
import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <section>
            <Wrapper>
                {/* Footer Content */}
                <div className='mt-72 flex flex-col md:flex-row md:p-8 bg-contact-box1 text-white'>
                    {/* Logo */}
                    <div className='w-full md:w-1/3 md:relative md:top-2.5 md:left-1'>
                        <Image src={logo} alt='Logo' />
                    </div>

                    {/* Address and Email */}
                    <div className='flex flex-col md:flex-row md:w-2/3'>
                        <div className='p-4 md:w-1/2'>
                            <p className='mb-4 md:mb-0'>ADDRESS:<br />
                                4th floor 408A, Sujata Chamber, UST/7, GR Abhey Chand, A Gandhi Marg,<br /> Vadgadi, Masjid Bandar West, Masjid Bandar, Mumbai, Maharashtra<br /> 400009
                            </p>
                        </div>
                        <div className='p-4 md:w-1/2'>
                            <p>EMAIL ADDRESS:<br /> company_email_id@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='bg-black text-white py-4 flex justify-center'>
                    <p>All Copyrights are reserved by Company name</p>
                </div>
            </Wrapper>
        </section>
    );
}

export default Footer;
