import Wrapper from '@/shared/Wrapper';
import React from 'react';

const Contactus = () => {
  return (
    <section>
      <Wrapper>
        <div className='text-white mt-20'>
          <h2 className='text-4xl font-serif '> Contact us</h2>

          {/* contact info */}
          <div className='text-2xl bg-contact-box text-black px-10 justify-around mt-4 font-normal'>
            <div className="flex ">
              <h4>Name:</h4>
              <form>
                <input className='bg-input-box' type="text" name="field-name" />
              </form>
            </div>
            <div className="flex ">
              <h4>Email id:</h4>
              <form>
                <input type="text" name="field-name" />
              </form>
            </div>
            <div className="flex ">
              <h4>Phone no.:</h4>
              <form>
                <input type="text" name="field-name" />
              </form>
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  );
}

export default Contactus;
