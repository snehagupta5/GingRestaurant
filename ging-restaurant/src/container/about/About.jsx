import React from 'react'
import './About.css'
import g from '../../asset/G.svg'
import knife from '../../asset/knife.svg'
import SubHeading from '../../component/subheading/SubHeading'
import spoon from '../../asset/spoon.svg'
import spoon2 from '../../asset/spoon2.svg'

const About = () => {
    return (
        <div className='bg-[#040404] py-10 relative w-full' id="about">
            <div className='letterIcon' style={{ zIndex: '0' }}><img src={g}></img></div>
            <div className='flex justify-center items-center gap-10 aboutSection'>
                <div className='flex items-end  flex-col gap-1 text-center aboutSection_02' style={{ fontFamily: 'var(--font-base)',zIndex: '1'}}>
                    <h2 className='font-bold text-6xl text-[--color-golden] '>About Us</h2>
                    <img src={spoon2} alt='spoon' />
                    <div className='pt-4 text-right text-[#AAAA]'>Embark on a gastronomic adventure at Sit Tellus Lobortis, where culinary mastery intertwines with timeless elegance. Delight in flavors, curated dining, and unparalleled hospitality. Each bite crafts cherished memories.</div>
                    <button className='bg-[#DCCA87] py-[8px] px-[32px] font-bold mt-4 customButton' style={{ fontFamily: 'var(--font-base)' }}>Know More</button>
                </div>
                <img className='self-center' style={{ zIndex: '1' }} src={knife}></img>
                <div className='flex items-start flex-col gap-1 aboutSection_02' style={{ fontFamily: 'var(--font-base)',zIndex: '1' }}>
                    <h2 className='font-bold text-6xl text-[--color-golden] '>Our History</h2>
                    <img src={spoon} alt='spoon' />
                    <div className='pt-4 text-[#AAAA]'>Established with passion and precision, Sit Tellus Lobortis boasts a rich history rooted in culinary excellence. Since 1999, we have been crafting extraordinary dining experiences, blending innovation with tradition.</div>
                    <button className='bg-[#DCCA87] py-[8px] px-[32px] font-bold mt-4 customButton ' style={{ fontFamily: 'var(--font-base)' }}>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default About