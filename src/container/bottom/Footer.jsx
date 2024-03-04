import React from 'react'
import spoon from '../../asset/spoon.svg'
import './footer.css'
import logo from '../../asset/logo.svg'

const Footer = () => {
  return (
    <div className=' bg-[#0C0C0C]  flex gap-16 flex-col items-center' id='contact'>
      <div className='footerCard flex flex-col gap-6'>
        <div className='flex items-center text-[#ffff] flex-col gap-2'>
          <div style={{ fontFamily: 'var(--font-base)' }} className='tracking-wider'>Newsletter</div>
          <img style={{ width: '4rem' }} src={spoon}></img>
          <h2 className='font-bold text-4xl text-[--color-golden] pt-3' style={{ fontFamily: 'var(--font-base)', letterSpacing: '0.15rem', textAlign: 'center' }}>Subscribe to Our Newsletter</h2>
          <p className='pt-2 text-xsm' style={{ fontFamily: 'var(--font-alt)' }}>And never miss latest Updates!</p>
        </div>
        <div className='flex items-center gap-2 w-full text-[#FFFF] mt-2 justify-center'>
          <input type='text' placeholder='Enter Address' className='bg-transparent footerInput p-2 w-1/3' />
          <button className='bg-[#DCCA87] py-[6px] px-[22px] font-bold text-[#0C0C0C] ml-2 customButton' style={{ fontFamily: 'var(--font-base)' }}>Subscribe</button>
        </div>
      </div>
      <div className='text-sm flex gap-10  footerSection' style={{ fontFamily: 'var(--font-alt)' }}>
        <div className='text-[#F5EFDB] gap-2 flex flex-col items-center'>
          <p className='text-lg' style={{ fontFamily: 'var(--font-base)' }}>Contact Us</p>
          <p>9 W 53rd St, bangalore,10019, India</p>
          <p>+91 864789827</p>
          <p>+91 87786765</p>
        </div>
        <div className='text-[#F5EFDB] gap-2 flex flex-col items-center mt-[-0.5rem]'>
        <p className='text-4xl font-bold' style={{ fontFamily: 'var(--font-base)' }}>Ging</p>
          <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <p>Follow Us</p>
        </div>
        <div className='text-[#F5EFDB] gap-2 flex flex-col items-center'>
          <p className='text-lg' style={{ fontFamily: 'var(--font-base)' }}>Working Hours</p>
          <p>Monday-Friday: 08:00 am -12:00 am</p>
          <p>Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className='text-[#F5EFDB] text-sm pb-10'>
        <p>2024 Joru. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer