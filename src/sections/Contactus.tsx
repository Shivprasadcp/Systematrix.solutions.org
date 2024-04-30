import Button from '@/shared/Button';
import Wrapper from '@/shared/Wrapper';
import React from 'react';

const Contactus = () => {
  return (
    <section>
      <Wrapper>
        <div className=' text-white mt-10 md:mt-20'>
          <h2 className='text-4xl font-serif text-center md:text-left'> Contact us</h2>

          {/* contact info */}
          <div className='flex flex-col text-2xl bg-contact-box text-black p-5 mt-8 font-normal'>
            <div className="flex flex-col  md:space-x-8">

              <div className="flex flex-row  mt-4 md:mt-0">
                <h4>Name:</h4>
                <form>
                  <input className='bg-input-box rounded-lg mt-2' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-row mt-4 md:mt-0">
                <h4>Email id:</h4>
                <form>
                  <input className='bg-input-box rounded-lg mt-2' type="text" name="field-name" />
                </form>
              </div>

              <div className="flex flex-row mt-4 md:mt-0">
                <h4>Phone no.:</h4>
                <form>
                  <input className='bg-input-box rounded-lg mt-2' type="text" name="field-name" />
                </form>
              </div>

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
