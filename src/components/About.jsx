import React from 'react'
import Title from './Title'
import {assets} from '../assets/assets'
const About = () => {
    return (
        <div className='bg-secondary mt-[80px] md:mt-[150px] py-2.5' id='About'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center my-8 '>
                    <div className='flex justify-center lg:justify-end mb-8 lg:mb-0 '>
                        <div className='bg-primary rounded-full relative overflow-hidden m-auto z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96   shadow-[var(--shadow-soft)]'>
                            <img src={assets.shahd1} alt="" className='w-full h-full object-cover absolute' />
                        </div>
                    </div>
                    <div className='space-y-6 sm:space-y-8 lg:pr-8 '>
                        <Title topTitle="About Me" description="Who Am " colorDescription="I ? " color="text-white" />
                    <h3 className=' text-gray-300 leading-tight text-xl'>
                        I'm Shahd Abd Elghany, a <span className='text-primary'>Frontend Developer specializing in React js</span> . I build dynamic, scalable web applications and have solid experience in .NET and SQL Server, enabling me to deliver full-stack solutions that align with real business needs.
                    </h3>
                        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-normal gap-5 sm:gap-6 mt-4 text-amber-50">
                            <div className=''>
                                <h4 className='text-primary text-xl mb-2.5'>- Education</h4>
                                <p>Bachelor's Degree  (2023-present) </p>
                                <p>Faculty of Computers and Information</p>
                                <p>
                                    South Valley University </p>
                            </div>
                            </div>
                        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-normal gap-5 sm:gap-6 mt-4">
                            <button
                                className=" bg-white text-primary rounded-full hover:text-secondary  font-medium px-6 py-2 transition-spring hover:scale-105"
                            >
                                <a href="/Shahd Abd Elghany-Resume.pdf" download="shahdCV.pdf" target='_blank' className='text-inherit no-underline'>
                                Download CV
                                </a>
                            </button>
                            <button
                                className="border border-white text-primary rounded-full hover:text-white  font-medium px-6 py-2 transition-spring hover:scale-105"
                            >
                                <a href="https://github.com/Shahd-Abdalghny" target='_blank' className='text-inherit no-underline'>
                                GitHub
                                </a>
                            </button>
                        </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default About