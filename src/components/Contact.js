import React from 'react'

const Contact = () => {
  const config ={
    email:'ragulprasanthwork@gmail.com',
    phone:'9025820446'
  }
  return (
    <section className='flex flex-col  bg-primary px-5 py-32' id='contact'>
            <div className=' text-white flex flex-col items-center'>
                <h1 className=' text-4xl border-b-4 border-[#9acd32] mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5' >If you want to discuss more to detail,please contact me </p>
                <p><span className='font-bold'>Email: </span>{config.email}</p><br />
                <p><span className='font-bold'>Phone: </span>{config.phone}</p>
                
            </div>
        
    </section>
  )
}

export default Contact
