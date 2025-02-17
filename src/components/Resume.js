import React from 'react'
import ResumeImg from '../asserts/resume.jpg'

const Resume = () => {
  const config ={
    link : ''
  }
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center '>
            <img className='w-[300px]' src={ResumeImg} alt="resumeimg" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' text-white flex flex-col justify-center'>
                <h1 className=' text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5' >You can view my resume <a href={config.link} className='button'>View</a> </p>
                
            </div>
        </div>
    </section>
  )
}

export default Resume
