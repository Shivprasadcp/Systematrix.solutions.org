import Wrapper from '@/shared/Wrapper';
import React from 'react';
import Heroposter from '@/assets/Hero img.png'
import Image from 'next/image';
import Button from '@/shared/Button';
import Button_white from '@/shared/Button_white';

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between text-white p-10' >

                        {/*Left*/}
                        <div className=''>
                            <h4 className='text-white text-5xl font-bold py-10 '>Software <br /> solutions</h4>
                            <p className='w-72 '>Welcome to Systematrix , Your Premier Software Solution Partner!
                                Transforming Ideas into Reality with Innovative Technology Solutions.</p>
                            <div className='flex  mt-10'>
                                <Button_white text={"Get Started"} />
                                <Button text={"Learn more"} />

                            </div>

                        </div>

                        {/*Right*/}
                        <div className='w-5/12  '>
                            <Image src={Heroposter} alt='Hero poster' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Hero;
