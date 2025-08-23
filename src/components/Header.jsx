import React from 'react'
import TextType from './TextType';
import { assets } from '../assets/assets';


const Header = () => {
    return (
        <>
            <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px] md:mt-[150px] min-h-11/12' id='Home'>
                <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl'>
                    <div className='space-y-6 sm:space-y-8 lg:pr-8 '>
                        <div className='flex justify-center md:justify-normal lg:items-start '>

                            <h2 className='text-sm sm:text-base lg:text-lg font-medium text-gray-600 bg-background px-3 sm:px-4 py-2 border-2 border-gray-800 '>Hello there!</h2>
                        </div>
                        <div className='space-y-2 sm:space-y-4 text-center md:text-start'>

                            <h1 className='text-2xl  md:text-3xl xl:text-4xl font-medium  leading-tight'>
                                I am <span className='text-primary italic underline underline-offset-8 inline-block md:inline'>Shahd Abd Elghany,</span>

                                <div className='text-1xl  lg:text-2xl xl:text-3xl font-medium   leading-tight mt-2'>
                                    <TextType
                                        text={["Software Engineer", "Front End Devoloper", "Full Stack Trainee"]}
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|"
                                    />
                                </div>
                            </h1>
                        </div>
                        <p className='text-base sm:text-lg lg:text-xl text-gray-500 max-w-lg  text-center md:text-start'>I have strong experience in Front-End development, particularly with React.

                        </p>
                        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-normal gap-5 sm:gap-6 mt-4">
                            <button
                                className=" bg-secondary text-white rounded-full hover:text-primary active:text-primary font-medium px-6 py-2 transition-spring hover:scale-105 active:scale-105"
                            >
                                <a href="#Projects" className='text-inherit no-underline' >

                                    View My Portfolio
                                </a>
                            </button>
                            <button
                                className="border border-secondary text-secondary rounded-full hover:text-primary active:text-primary  font-medium px-6 py-2 transition-spring hover:scale-105 active:scale-105"
                            >
                                <a href="#Contact" className='text-inherit no-underline' >

                                    Hire Me
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 '>
                        <div className=' m-auto z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shadow-[var(--shadow-soft)]'>

                            <img src={assets.header_image} alt="" className='w-full h-full object-cover fill-primary ' />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header