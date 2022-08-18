import React from 'react'

const PriceTag = (props) => {
    return (
        <>

        <div className='flex flex-col items-center justify-center gap-4 price-main-box'>
        <p className='font-semibold dark:text-white text-blue-lightmd lg:hidden md:block upper_pricetag_type'>{props.type}</p>
            <h1 style={{background:`${props.color}`}} className="px-14 py-2 rounded-md shadow-sm text-white   font-bold text-lg md:text-4xl md:min-w-[15rem] priceBox">{props.unit}{props.price}</h1>
            <p className='font-semibold dark:text-white text-blue-lightmd lg:block md:hidden lower_pricetage_type'>{props.type}</p>
        </div>
       
        </>
       
    )
}

export default PriceTag