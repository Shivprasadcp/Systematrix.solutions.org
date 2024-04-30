import Wrapper from '@/shared/Wrapper';
import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <section>
            <Wrapper>

                <div className=' mt-14 flex flex-row p-8 bg-contact-box text-white'>
                    <div className='w-28 h-28 relative top-2.5 left-1'>
                        <Image src={logo} alt='Logo' />
                    </div>

                    <div className='flex flex-row '>
                        <div className='p-4'>
                            <p>ADDRESS : <br />
                                4th floor 408A, Sujata Chamber, UST/7, GR Abhey Chand, A Gandhi Marg,<br /> Vadgadi, Masjid Bandar West, Masjid Bandar, Mumbai, Maharashtra <br /> 400009</p>
                        </div>

                        <div className='p-4 px-6'>
                            <p>EMAIL ADDRESS: <br /> company_email_id@gmail.com</p>
                        </div>

                    </div>


                </div>
                <div className='bg-black text-white flex justify-center'>
                    <p>All Copyrights are reserved by Company name</p>
                </div>
            </Wrapper>

        </section>
    );
}

export default Footer;
