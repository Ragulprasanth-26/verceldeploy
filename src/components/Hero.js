import React from 'react'
import HeroImg from '../asserts/hero.jpg'
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineLinkedin } from 'react-icons/ai'
const Hero = () => {

  const config ={
    subtitle :'Im a Software developer',
    social: {
      instagram:'https://www.instagram.com/ragul_crick26?igsh=MTk2aTdxaDYwd2I5YQ==',
      facebook:'https://www.facebook.com/share/15xNLRkeDE/',
      linkedlin:'https://www.linkedin.com/in/ragul-prasanth-a-151893321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi <br />Im <span className='text-yellow-200'>A</span>.Ragul Prasanth
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10 '>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                <a href={config.social.linkedlin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
        </div>
        
        <img  src={HeroImg} alt="Image" className='w-1/2 md:w-[350px] h-1/2 md:h-[350px] border-2 border-white rounded' />
    </section>
  )
}

export default Hero
