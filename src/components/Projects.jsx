import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'


const projects = [
  {
    image: assets.restaurant,
    title: "Restaurant Website",
    description: "A responsive restaurant website , showcasing menu sections and modern design.",
    skills: ["Html", "CSS", "Js", "Booptstrap"],
    github: "https://github.com/Shahd-Abdalghny/Restaurant",
    demo: "https://restaurant-7k1l.vercel.app/"
  },
  {
    image: assets.prayer,
    title: "Prayer Tracker Website",
    description: "A prayer tracker website that helps users mark their daily prayers, view progress, and stay consistent.",
    skills: ["Html", "CSS", "react.js", "Booptstrap"],
    github: "https://github.com/Shahd-Abdalghny/Prayer-Tracker",
    demo: "https://prayer-tracker-phi.vercel.app/"
  },
  {
    image: assets.mackup,
    title: "Makeup Artist LandingPage",
    description: "A clean, responsive landing page built to highlight a makeup artist’s portfolio and make booking easy.",
    skills: ["Html", "CSS", "Js", "Booptstrap"],
    github: "https://github.com/Shahd-Abdalghny/make-up-artist",
    demo: "https://shahd-abdalghny.github.io/make-up-artist/"
  },


]
const Projects = () => {
  return (
    <div className='bg-gray-50 py-24 mt-[80px] md:mt-[150px] mb-20' id='Projects'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Title topTitle="My Portfolio" description="My Latest" colorDescription="Projects" />
        <div className="flex flex-wrap gap-3 gap-y-5 mt-10 justify-center">
          {
            projects.map((project, i) => {
              return (

                <div className="max-w-sm bg-white rounded-lg shadow-sm  duration-300 ease-in hover:-translate-y-2" key={i}>
                  <img className="rounded-t-lg" src={project.image} alt={project.title} />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800 ">{project.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 "> {project.description}</p>
                    <div className='flex gap-1 items-center pb-5 border-b border-b-gray-300'>
                      {project.skills.map((s, index) => (
                        <span key={index} className='bg-gray-400 rounded-3xl px-1.5 text-white text-base'>{s}</span>
                      ))}
                    </div>
                    <div className='mt-3 flex gap-3 items-center'>
                      <a href={project.github} target='_blank' className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  rounded-lg  focus:outline-none border border-secondary" >
                        GitHup
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                      </a>
                      <a href={project.demo} target='_blank' className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  rounded-lg  focus:ring-4 outline-none border border-secondary" >
                        Demo
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" /></svg>              </a>

                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>

      </div>
    </div>
  )
}

export default Projects