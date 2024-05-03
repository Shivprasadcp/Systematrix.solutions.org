import Button from '@/shared/Button';
import Wrapper from '@/shared/Wrapper';
import React from 'react';

const Contactus = () => {
  return (
    <section >
      <Wrapper>
        <div className=' text-white mt-48'>
          <h2 className='text-4xl font-serif text-center md:text-left'> Contact us</h2>

          {/* contact info */}
          <div className=' flex flex-row mt-8 '>


            {/* Left */}
            <div className='flex flex-col p-10 divide-y divide-white gap-y-4 bg-contact-box1 w-6/12'>
              <div className="flex flex-row   md:mt-0">
                <h4>Name:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-row   md:mt-0">
                <h4>Email id:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 ' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-row  md:mt-0">
                <h4>Phone no.:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-row  md:mt-0">
                <h4>Subject:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-row md:mt-0">
                <h4>Message:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4' type="text" name="field-name" />
                </form>
              </div>

            </div>

            {/* Right */}

            <div className='flex flex-col gap-y-10 bg-contact-box2 w-6/12 p-6 justify-center '>
              <h1 className='text-2xl font-serif'>Our Newsletter</h1>
              <p>     Subscribe to our Newsletter for <br /> latest updates of our work and services</p>
              <Button text='Subscribe'/>

              
            </div>



          </div>
          <div className='flex  mt-5 justify-center'>
            <Button text={"Submit Response"} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Contactus;
