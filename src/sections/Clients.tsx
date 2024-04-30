import React from 'react';
import Image from 'next/image';
import clients from '../assets/Clients.png'
import Wrapper from '@/shared/Wrapper';

const Clients = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Wrapper>
        <div className='mt-40'>
          <Image src={clients} alt='Clients data' />
        </div>
      </Wrapper>
    </section>

  );
}

export default Clients;
