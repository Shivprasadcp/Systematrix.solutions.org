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
          <div className=' flex flex-col items-center  mt-8 md:flex-row'>


            {/* Left */}
            <div className='flex flex-col   p-5 md:p-10 divide-y divide-white gap-y-4 bg-contact-box1 md:h-6/12  md:w-6/12'>
              {/* <div>
                <h1 className='p-2'>Write us</h1>
              </div> */}
              <div className="flex flex-col  md:flex-row  md:mt-0">
                <h4 className='text-sm md:text-base'>Name:</h4>
                <form>
                  <input className='bg-transparent border-none  focus:outline-none focus:border-transparent ml-4 w-full md:w-auto text-sm md:text-base' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-col  md:flex-row   md:mt-0">
                <h4>Email id:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-col  md:flex-row  md:mt-0">
                <h4>Phone no.:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-col  md:flex-row md:mt-0">
                <h4>Subject:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-col  md:flex-row md:mt-0">
                <h4>Message:</h4>
                <form>
                  <input className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />
                </form>
              </div>

            </div>

            {/* Right */}

            <div className='flex flex-col items-center gap-y-9 p-4 bg-contact-box2   md:w-6/12 md:h-6/12  justify-center '>
              <h1 className='text-2xl font-serif'>Our Newsletter</h1>
              <p>     Subscribe to our Newsletter for <br /> latest updates of our work and <br />services</p>
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
