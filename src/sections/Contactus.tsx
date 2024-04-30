import Button from '@/shared/Button';
import Wrapper from '@/shared/Wrapper';
import React from 'react';

const Contactus = () => {
  return (
    <section>
      <Wrapper>
        <div className='text-white mt-20'>
          <h2 className='text-4xl font-serif '> Contact us</h2>

          {/* contact info */}
          <div className='text-2xl bg-contact-box text-black p-5 mt-8 font-normal'>
            <div className="flex  space-x-8">
              <h4>Name:</h4>
              <form>
                <input className='bg-input-box rounded-lg ' type="text" name="field-name" />
              </form>
            </div>
            <div className="flex mt-4 space-x-8">
              <h4>Email id:</h4>
              <form>
                <input className='bg-input-box rounded-lg ' type="text" name="field-name" />
              </form>
            </div>
            <div className="flex mt-4 space-x-8">
              <h4>Phone no.:</h4>
              <form>
                <input className='bg-input-box rounded-lg' type="text" name="field-name" />
              </form>
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
