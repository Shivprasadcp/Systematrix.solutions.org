import React, { FC } from 'react';
import Image from 'next/image';
import proimg from '../assets/image.png'

interface IProps {
    title: string | undefined;
    paragraph: string | undefined;
    // number: number | undefined;
}

const Projectbox: FC<IProps> = ({ title, paragraph }) => {
    return (
        <div className='flex flex-col border-solid border border-custom-gray w-full md:w-80 bg-custom-proj my-4 rounded-3xl'>
            <div className='flex justify-center mt-4'>
                {/* Image */}
                <div className='px-4 w-48  md:w-80 '>
                    <Image src={proimg} alt='Project image' layout='responsive' width={200} height={200} />
                </div>
            </div>
            <div className='text-white  justify-center p-4 '>
                <h4 className='text-lg md:text-xl font-semibold'>{title}</h4>
                <p className='mt-4 text-sm md:text-base'>{paragraph}</p>
                {/* <span>{number}</span> */}
            </div>
        </div>
    );
}

export default Projectbox;
