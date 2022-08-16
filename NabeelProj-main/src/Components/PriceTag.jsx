import React from 'react'

const PriceTag = (props) => {
    return (
        <>

        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='px-14 py-2 rounded-md shadow-sm text-white bg-[#00b40efc]  font-bold text-lg md:text-4xl'>{props.price}{props.unit}</h1>
            <p className='font-semibold dark:text-white text-blue-lightmd'>{props.type}</p>
        </div>
       
        </>
       
    )
}

export default PriceTag