import React from 'react'
import SubHeading from '../../component/subheading/SubHeading'
import hero_img from '../../asset/Hero_img.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='flex bg-[--color-black] items-center py-5' id="home">
      <div className='flex items-center justify-center w-full gap-20 heroWrap p-10'>
        <div className='flex flex-col items-start gap-5 flex-wrap heroSubSection'>
          <SubHeading heading={'Chase the new Flavour'} />
          <h1 className='font-extrabold text-8xl text-[--color-golden]' style={{ fontFamily: 'var(--font-base)' }}>The key to Fine dining</h1>
          <h3 className='text-[#AAAA]' style={{ fontFamily: 'var(--font-alt)' }}>Savor Exquisite Delights: A Culinary Journey in Sit Tellus Lobortis - Where Culinary Mastery Meets Timeless Elegance. Immerse Yourself in a Symphony of Flavors and Unforgettable Dining Experiences. Indulge in Culinary Excellence and Unparalleled Hospitality, Creating Lifelong Memories with Each Palate-Pleasing Bite.</h3>
          <button className='bg-[#DCCA87] py-[8px] px-[32px] font-bold mt-4 customButton' style={{ fontFamily: 'var(--font-base)' }}>Explore More</button>
        </div>

        <div>
          <img className='heroSubSection_02' src={hero_img} alt='hero_img'></img>
        </div>
      </div>
    </div>
  )
}

export default Header