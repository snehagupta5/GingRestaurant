import React from 'react'
import SubHeading from '../../component/subheading/SubHeading'
import findUs from '../../asset/findUs.svg'
import './contact.css'

const Contact = () => {
    return (
        <div className='bg-[#040404] py-5 flex justify-center items-center gap-20 findSection'>
            <div className='justify-center flex flex-col findSection_01 '>
                <SubHeading heading={'Contact'} />
                <h2 className='font-extrabold text-6xl pt-3 text-[--color-golden]' style={{ fontFamily: 'var(--font-base)' }}>Find Us</h2>
                <p className='text-[#AAAA] text-sm py-8 italic tracking-wide' style={{ fontFamily: 'var(--font-alt)' }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                <div className='text-[#FFFFFF] text-sm gap-4 flex flex-col'>
                    <h3 className='text-[--color-golden] text-lg tracking-widest' style={{ fontFamily: 'var(--font-base)' }}>Opening Hours</h3>
                    <p>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p>Sat - Sun: 10:00 am - 03:00 am</p>
                </div>
            </div>
            <img src={findUs} alt="findImg" className='findSection_02'/>
        </div>
    )
}

export default Contact