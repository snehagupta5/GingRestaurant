import React from 'react'
import SubHeading from '../../component/subheading/SubHeading'
import photo1 from '../../asset/1.svg'
import photo2 from '../../asset/photo2.svg'
import photo3 from '../../asset/photo3.svg'
import photo4 from '../../asset/photo4.svg'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='bg-[#0C0C0C] py-5 flex items-center gap-4 app__gallery '>
            <div className='flex flex-col items-start flex-wrap'>
                <SubHeading heading={'Instagram'} />
                <h2 className='font-extrabold text-6xl pt-3 text-[--color-golden]' style={{ fontFamily: 'var(--font-base)' }}>Photo Gallery</h2>
                <p className='text-[#AAAA] text-sm py-8 italic tracking-wide' style={{ fontFamily: 'var(--font-alt)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button className='bg-[#DCCA87] py-[8px] px-[32px] font-bold mt-4 customButton' style={{ fontFamily: 'var(--font-base)' }}>Explore More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container">
                    <div className="app__gallery-images_card flex__center">
                        <img src={photo1} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                    </div>
                    <div className="app__gallery-images_card flex__center">
                        <img src={photo2} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                    </div>
                    <div className="app__gallery-images_card flex__center">
                        <img src={photo3} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                    </div>
                    <div className="app__gallery-images_card flex__center">
                        <img src={photo4} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gallery