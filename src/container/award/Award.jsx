import React from 'react'
import award from '../../asset/awards.svg'
import awardRing from '../../asset/awardRing.svg'
import SubHeading from '../../component/subheading/SubHeading'
import './Award.css'

const Award = () => {
  return (
    <div className='bg-[#040404] py-10 relative w-full' id='awards'>
         <div className='flex gap-20 h-full justify-center items-center awardSection'>
            <div className='px-5'>
                <SubHeading heading={'Awards & recognition'}/>
                <h2 className='font-extrabold text-4xl pt-3 text-[--color-golden]' style={{ fontFamily: 'var(--font-base)' }}>Our Laurels</h2>
                <div className='pt-5 flex gap-4 flex-col'>
                <div className='flex gap-4 awardSection_03'>
                    <div className='flex justify-center items-center text-[#AAAA] gap-2 '>
                        <img src={awardRing}></img>
                        <div>
                        <p className='font-bold text-lg text-[--color-golden]'>Bib Gourmond</p>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div>
                    <div className='flex justify-center items-center text-[#AAAA] gap-2'>
                        <img src={awardRing}></img>
                        <div>
                        <p className='font-bold text-lg text-[--color-golden]'>Rising Star</p>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex gap-4 awardSection_03'>
                    <div className='flex justify-center items-center text-[#AAAA] gap-2'>
                        <img src={awardRing}></img>
                        <div>
                        <p className='font-bold text-lg text-[--color-golden]'>AA Hospitality </p>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div>
                    <div className='flex justify-center items-center text-[#AAAA] gap-2'>
                        <img src={awardRing}></img>
                        <div>
                        <p className='font-bold text-lg text-[--color-golden]'>Outstanding Chef</p>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <img src={award} alt='award' className='awardSection_02'></img>
         </div>
    </div>
  )
}

export default Award