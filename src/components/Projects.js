import React from 'react'
import WebSiteImg1 from '../asserts/ecommerce-websites.jpg'
import Todolist from '../asserts/todolist.png'
import X from '../asserts/X-logo.jpg'
import Task from '../asserts/task_managrment.png'
const Projects = () => {
   const config ={
      projects :[
         {
            image: WebSiteImg1,
            description:'A Eccomence website is build with MERN stack.',
            links:'https://github.com/Ragulprasanth-26/mini-eccomance',

        },
        {
            image: Todolist,
            description:'Todolist Application is built with purly React.js.',
            links:'https://github.com/Ragulprasanth-26/todolist-togcolor/tree/main/Todolist',
         },
         {
            image: X,
            description:'X-clone app with the features of the twitter app.It is in developing state so the link will attach soon',
            links:'',

        },{
         image : Task ,
         description : "A task management app built with the MERN stack (MongoDB, Express.js, React, and Node.js) is a full-stack web application designed to help users create, organize, and manage tasks efficiently. ",
         links: "https://github.com/Ragulprasanth-26/Task-Management"
        }
      ]
   }
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='projects'>
        <div className='w-1/2'>
            <div className='justify-center'>
              <h1 className=' text-4xl border-b-4 border-[#2b2d77] mb-5 w-[150px] font-bold'> Projects</h1>
              <p className='py-5'>These are some of my best projects.I have built this with React,Java,MERN technologies</p>
            </div>
        </div>
        <div className='w-full'>

          
            <div className='flex flex-col md:flex-row  px-10 gap-5'>
               {config.projects.map((projects)=> (
                     <div className='relative'>
                        <img className='h-[200px] w-[600px] bg-white' src={projects.image} alt="Eccomence website" />
                        <div className='project-dis'>
                           <p className='text-center py-5 px-5'>{projects.description}</p>
                           <div className='flex justify-center'>
                               <a className='button' target='_blank'  href={projects.links}>View project</a>
                            </div>
                        </div>
                     </div>
                    
                   
               )
               )}
              
              
              
            </div>
        </div>
    </section>
  )
}

export default Projects
