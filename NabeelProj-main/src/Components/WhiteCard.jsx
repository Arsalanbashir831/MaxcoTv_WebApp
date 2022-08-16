import React from 'react'
import Dashboard from '../assets/Dashboard.svg'
const WhiteCard = ({ image, heading, subHeading }) => {
    return (
        <div className='w-[300px] flex flex-col items-start justify-center whiteCard'>
            {/* Add Custom images here via props */}
            <img src={image} className='lg:max-w-[200px] service-img' alt="" />
            <h1 className='dark:text-white font-bold text-blue-lightmd font-lg'>{heading}</h1>
            <p className='dark:text-white  text-xl md:text-2xl w-[200px] text-blue-lightmd font-lg'>{subHeading}</p>
        </div>
    )
}

export default WhiteCard