import React from 'react'
import Title from './Title'

const Services = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px] md:mt-[150px] mb-20' id='Services'>
            <Title topTitle="Services" description="My Provided" colorDescription="Features" />
            <div className='flex flex-wrap gap-2 justify-center p-6 mt-6'>
                <div className="max-w-sm px-6 py-10  border border-secondary rounded-lg shadow-sm hover:-translate-y-2 hover:bg-primary  duration-300 ease-in group">
                    <i class="fa-solid fa-code text-primary group-hover:text-white text-xl"></i> 
                    <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white ">Web Development</h5>
                    <p className="mb-3 font-normal text-gray-500 group-hover:text-gray-300 ">Frontend & Backend development using React , .Net and modern wen tecnologies.</p>
                </div>
                <div className="max-w-sm  px-6 py-10  border border-secondary rounded-lg shadow-sm hover:-translate-y-2 hover:bg-primary  duration-300 ease-in group">
                    <i class="fa-solid fa-display text-primary group-hover:text-white text-xl"></i>
                    <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white ">UI / UX</h5>
                    <p className="mb-3 font-normal text-gray-500 group-hover:text-gray-300 ">Designing clean, interactive interfaces using Figma .</p>
                </div>
                <div className="max-w-sm px-6 py-10  border border-secondary rounded-lg shadow-sm hover:-translate-y-2 hover:bg-primary  duration-300 ease-in group">
                    <i class="fa-solid fa-code text-primary group-hover:text-white text-xl"></i> 
                    <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white ">Web Development</h5>
                    <p className="mb-3 font-normal text-gray-500 group-hover:text-gray-300 ">Frontend & Backend development using React , .Net and modern wen tecnologies.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Services