import React from 'react'
import spoon from '../../asset/spoon.svg'
import jar from '../../asset/jar.svg'
import './Specialmenu.css'

const SpecialMenu = () => {
    return (
        <div className='bg-[#0C0C0C] py-5 flex justify-center flex-col' id='menu'>
            <div className='flex items-center text-[#ffff] flex-col gap-2'>
                <div style={{ fontFamily: 'var(--font-base)' }} className='tracking-wider'>Menu that fits you palatte</div>
                <img style={{ width: '4rem' }} src={spoon}></img>
                <h2 className='font-bold text-4xl text-[--color-golden] pt-3' style={{ fontFamily: 'var(--font-base)', letterSpacing: '0.15rem',textAlign:'center'}}>Today’s Special</h2>
            </div>
            <div className='w-full m-auto'>
                <div className='flex w-full justify-center items-center gap-5 menuSection'>
                    <div className='flex items-center text-[#ffff] flex-col  gap-10 justify-center menuSubSection'>
                        <p className='text-3xl' style={{ fontFamily: 'var(--font-base)'}}>Wine & Beer</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Chapel Hill Shiraz</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div>$56</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>AU | Bottle</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Catena Malbec</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$54</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>AR | Bottle</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>La Vieille Rosé</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$44</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>FR | 750 ml</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Rhino Pale Ale</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$31</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>CA | 750 ml</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Irish Guinness</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$26</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>IE | 750 ml</div>
                        </div>
                    </div>
                    <img className="h-[75vh]" src={jar}></img>
                    <div className='flex items-center text-[#ffff] flex-col  gap-10 justify-center menuSubSection'>
                        <p className='text-3xl' style={{ fontFamily: 'var(--font-base)'}}>Cocktails</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Aperol Spritz</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$20</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>Aperol | Villa Marchesi prosecco | soda | 30ml</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Dark 'N' Stormy</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$24</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>Dark rum | Ginger beer | Slice of lime. </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Dark rum | Ginger beer | Slice of lime. </div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$28</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>Rum | Citrus juice | Sugar</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Old Fashioned</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$11</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>Bourbon | Brown sugar | Angostura Bitters</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex text-[--color-golden] w-full items-center gap-2' style={{ fontFamily: 'var(--font-base)' }}>
                                <div className='w-[40%]'><div>Negroni</div></div>
                                <div className='w-[50%] border-t-2 border-[#DCCA87] '></div>
                                <div >$29</div>
                            </div>
                            <div className='text-xs text-[#AAAA]'>Gin | Sweet Vermouth | Campari | Orange garnish</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialMenu