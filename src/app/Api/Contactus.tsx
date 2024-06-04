'use client'
import Button from '@/shared/Button';
import Wrapper from '@/shared/Wrapper';
import React, { FC, FormEvent, useState } from 'react';
import { NextPage } from 'next';
import { initializeTraceState } from 'next/dist/trace';


const Contactus = () => {


  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      subject,
      message
    }

    // const  response =  await fetch('http://localhost:3000/Api/info',{
    //   method: 'POST',
    //   headers: {
    //     'Accept':'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify(form)
    // })

    const  response =  await fetch(` ${window.location.origin}/Api/info`,{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(form)
    })

    const content = await response.json();

    console.log(content)

    alert(content.data.tableRange)

    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')

   
  }

  return (
    <section >
      <Wrapper>
        <div className=' text-white mt-48'>
          <h2 className='text-4xl font-serif text-center md:text-left'> Contact us</h2>

          {/* contact info */}
          <form onSubmit={handleSubmit} className=' flex flex-col items-center  mt-8 md:flex-col'>


            {/* Left */}
            <div className='flex flex-col   p-5 md:p-10 divide-y divide-white gap-y-4 bg-contact-box1 md:h-6/12  md:w-6/12'>
              {/* <div>
                <h1 className='p-2'>Write us</h1>
              </div> */}
              <div className="flex flex-col  md:flex-row  md:mt-0">
                <h4 className='text-sm md:text-base'>Name:</h4>

                <input value={name} onChange={e => setName(e.target.value)} className='bg-transparent border-none  focus:outline-none focus:border-transparent ml-4 w-full md:w-auto text-sm md:text-base' type="text" name="field-name" />

              </div>

              <div className="flex flex-col  md:flex-row   md:mt-0">
                <h4>Email id:</h4>

                <input value={email} onChange={e => setEmail(e.target.value)} className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />

              </div>

              <div className="flex flex-col  md:flex-row  md:mt-0">
                <h4>Phone no.:</h4>

                <input value={phone} onChange={e => setPhone(e.target.value)} className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />

              </div>

              <div className="flex flex-col  md:flex-row md:mt-0">
                <h4>Subject:</h4>

                <input value={subject} onChange={e => setSubject(e.target.value)} className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' type="text" name="field-name" />

              </div>

              <div className="flex flex-col  md:flex-row md:mt-0">
                <h4>Message:</h4>

                <textarea value={message} onChange={e => setMessage(e.target.value)} className='bg-transparent border-none focus:outline-none focus:border-transparent ml-4 w-full md:w-auto' name="field-name"></textarea>

              </div>

            </div>

            {/* Right */}

            <div className='flex flex-col items-center gap-y-9 p-4 bg-contact-box2   md:w-6/12 md:h-6/12  justify-center '>
              <h1 className='text-2xl font-serif'>Our Newsletter</h1>
              <p>     Subscribe to our Newsletter for <br /> latest updates of our work and <br />services</p>
              <Button text='Subscribe' />


            </div>

            <div className='flex flex-col  mt-5 justify-center'>
              <Button text={"Submit Response"} />
              {/* <button type='submit'>Submit</button> */}
            </div>

          </form>

        </div>
      </Wrapper>
    </section>
  );
}

export default Contactus;
