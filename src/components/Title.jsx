import React from 'react'

const Title = ({ topTitle, description, colorDescription, color }) => {
    return (
        <div>
            <div>
                <h4 className={`text-base sm:text-lg lg:text-xl mb-2 ${color ?? "text-gray-900"}`}  >
                <span className='text-primary'>- </span>{topTitle}
                </h4>
                <h2 className={`text-3xl  md:text-4xl xl:text-5xl font-medium  ${color ?? "text-gray-900"}`} >
                    {description} <span className='text-primary'>{colorDescription} </span> 
                </h2>
            </div>




        </div>
    )
}

export default Title