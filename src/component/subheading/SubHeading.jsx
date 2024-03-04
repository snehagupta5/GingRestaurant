import React from 'react'
import spoon from '../../asset/spoon.svg'

const SubHeading = ({ heading }) => {
    return (
        <div >
            <div className='flex items-start text-white flex-col gap-1' style={{ fontFamily: 'var(--font-base)' }}>
                <div>{heading}</div>
                <img src={spoon} alt='spoon' style={{ width: '4rem' }}/>
            </div>

        </div>
    )
}

export default SubHeading