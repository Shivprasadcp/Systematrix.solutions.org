import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  member: string;
  paragraph: string;
  image: string; // New property for the image URL
}

const Teambox: FC<IProps> = ({ member, paragraph, image }) => {
  return (
    <div className='relative mt-8'>
      {/* Image */}
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-4' style={{ top: '-50px' }}>
        <Image src={image} alt='image' width={100} height={100} />
      </div>
      {/* Content */}
      <div className='static border-solid border border-custom-gray w-full md:w-80 bg-custom-proj my-4 rounded-3xl'>
        <div className='text-white px-4 pt-10 pb-4'>
          <h4 className='font-medium text-center'>{member}:</h4>
          <p className='italic text-center'>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Teambox;
