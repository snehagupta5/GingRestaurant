import React from 'react'
import './chef.css'
import chef from '../../asset/chef.svg'
import SubHeading from '../../component/subheading/SubHeading'

const Chef = () => {
    return (
        <div className='bg-[#040404] py-10 relative w-full'>
            <div className='flex gap-10 h-full justify-center items-center chefSection'>
                <img src={chef} alt='chef' className='chefSubSection_02'></img>
                <div className=' chefSubSection'>
                    <SubHeading heading={'Chef’s Word'} />
                    <h2 className='font-extrabold text-6xl pt-3 text-[--color-golden]' style={{ fontFamily: 'var(--font-base)' }}>What we believe in</h2>
                    <p className='text-[#AAAA] text-sm py-8 italic tracking-wide' style={{ fontFamily: 'var(--font-alt)' }}>
                        Infused with culinary artistry, our chefs at Sit Tellus Lobortis bring passion and precision to every dish. Since 1999, their dedication has transformed dining into an extraordinary experience, harmonizing innovation with time-honored traditions. Our culinary journey reflects a legacy of flavor, warm hospitality, and an unwavering commitment to crafting unforgettable memories.</p>
                    <div className='text-[#AAAA] text-sm'>
                        <h3 className='text-[--color-golden] text-lg tracking-widest' style={{ fontFamily: 'var(--font-base)' }}>Sneha Gupta</h3>
                        <p>Chef & Founder</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chef