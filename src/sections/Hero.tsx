import Wrapper from '@/shared/Wrapper';
import React from 'react';
import Heroposter from '@/assets/Hero img.png';
import Image from 'next/image';
import Button from '@/shared/Button';
import Button_white from '@/shared/Button_white';
import { inter } from '@/app/font'

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='flex flex-col'>
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-between text-white p-10'>

                        {/* Left */}
                        <div className=' flex flex-col items-center  w-full lg:w-1/2'>
                            <h4 className='{inter.className} text-center text-3xl lg:text-5xl font-bold py-2 lg:py-10'>Software  solutions</h4>
                            <p className=' text-center w-full lg:w-6/12'>Welcome to DeepTrail, Your Premier Software Solution Partner! Transforming Ideas into Reality with Innovative Technology Solutions.</p>
                            <div className='items-center justify-center flex flex-col gap-y-4 lg:flex-row mt-4 lg:mt-10'>
                                <Button_white text={"Get Started"} />
                                {/* <div className='hidden lg:block w-4'></div> Spacer for small screens */}
                                <Button text={"Learn more"} />
                            </div>
                        </div>

                        {/* Right */}
                        <div className='lg:w-1/2 lg:pl-10'>
                            <Image src={Heroposter} alt='Hero poster' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Hero;
