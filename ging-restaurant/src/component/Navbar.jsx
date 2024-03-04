import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from '../asset/logo.svg'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='flex bg-[--color-black] justify-between items-center pr-2'>
            <div><img src={logo} alt='logo' /></div>
            <div className='text-[#ffffff] cursor-pointer app_nav_item'>
                <ul className='flex gap-4 '>
                    <li><a href='#home' className='hover:text-[--color-golden]'>Home</a></li>
                    <li><a href='#about' className='hover:text-[--color-golden]' >About</a></li>
                    <li><a href='#menu' className='hover:text-[--color-golden]' >Menu</a></li>
                    <li><a href='#awards' className='hover:text-[--color-golden]' >Awards</a></li>
                    <li><a href='#contact' className='hover:text-[--color-golden]' >Contact</a></li>
                </ul>
            </div>
            <div className='text-[#ffffff] gap-7 cursor-pointer font-family-[--font-alt] app_nav_section pr-10'>
                <div className='pb-1 group hover:border-b hover:border-[--color-golden] app_nav_subsection'>Log In / Registration</div>
                <div className='border-l-[1px]'></div>
                <div className='pb-1 group hover:border-b hover:border-[--color-golden] app_nav_subsection'>Book Table</div>
            </div>
            <div className='text-[#ffffff] cursor-pointer pr-2 app_nav_icon'>
                {!toggle && <div>
                    <GiHamburgerMenu fontSize={27} onClick={() => setToggle(true)} />
                </div>}
                {toggle &&
                    <div className='nav_show'>
                        <div className='w-[100%] flex justify-end pt-4 pr-2'>
                        <MdOutlineRestaurantMenu fontSize={27} onClick={() => setToggle(false)} color='#DCCA87'/>
                        </div>
                        <div className=' relative nav_show_02'>
                            <ul className='flex gap-4 flex-col'>
                                <li><a href='#home' onClick={() => setToggleMenu(false)} className='hover:text-[--color-golden]'>Home</a></li>
                                <li><a href='#about' onClick={() => setToggleMenu(false)} className='hover:text-[--color-golden]' >About</a></li>
                                <li><a href='#menu' onClick={() => setToggleMenu(false)} className='hover:text-[--color-golden]' >Menu</a></li>
                                <li><a href='#about' onClick={() => setToggleMenu(false)} className='hover:text-[--color-golden]' >Awards</a></li>
                                <li><a href='#contact' onClick={() => setToggleMenu(false)} className='hover:text-[--color-golden]' >Contact</a></li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar