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
        <div className='flex flex-col border-solid border border-custom-gray w-80 bg-custom-proj  my-4 rounded-3xl'>
            <div className='flex justify-center mt-4'>
                {/* Image */}
                <Image src={proimg} alt='Project image' />
            </div>
            <div className='text-white mt-4 justify-center p-4'>

                <h4>{title}</h4>
                <p>{paragraph}</p>
                {/* <span>{number}</span> */}
            </div>
        </div>
    );
}

export default Projectbox;
