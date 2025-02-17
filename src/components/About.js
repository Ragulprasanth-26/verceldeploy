import React from 'react'
import AboutImg from '../asserts/about.png'

const About = () => {
  const config ={
    line1:'Hi, My name is  A Ragul Prasanth. I am a Full stack web developer i build beautiful Websites with React JS and Tailwind CSS.',
    line2:'I am proficiant in Frontend skills like React.js ,Axios ,Tailwind CSS, and many more.',
    line3:'In backend I know Node.js Express.js,MongoDB.',
    line4:'I also know the software programming languages like python and JAVA'
  }
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt="Aboutimg" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' text-white flex flex-col justify-center'>
                <h1 className=' text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5' >{config.line1} </p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
            </div>
        </div>
    </section>
  )
}

export default About
