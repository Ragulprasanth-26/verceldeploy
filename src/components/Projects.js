import React from 'react'
import WebSiteImg1 from '../asserts/ecommerce-websites.jpg'
import Todolist from '../asserts/todolist.png'
import X from '../asserts/Java-Logo.png'
import Task from '../asserts/task_managrment.png'

const Projects = () => {
   const config ={
      projects :[
         {
            image: WebSiteImg1,
            description:'1.It is a mini e-commerce website like amazon meesho etc..It  build with the MERN stack technology and for styling purpose tailwind is used Status : Completed . But not Deployed',
            links:'https://github.com/Ragulprasanth-26/mini-eccomance',

        },
        {
            image: Todolist,
            description:'Todolistproject is completely build with the javascript frame work known as React.js.',
            links:'https://github.com/Ragulprasanth-26/todolist-togcolor/tree/main/Todolist',
         },
         {
            image: X,
            description:'Some train, flight, and taxi booking systems are developed using Java.Java provides a robust and secure platform for building reliable booking applications.These systems handle real-time bookings, payments, and user management efficiently',
            links:'https://github.com/Ragulprasanth-26/JAVA-PROGRAMS-java',

        },{
         image : Task ,
         description : "A task management app built with the MERN stack is a full-stack web application designed to help users create, organize, and manage tasks efficiently. ",
         links: "https://github.com/Ragulprasanth-26/Task-Management"
        }
      ]
   }
  return (
    <section className='flex flex-col md:flex-row py-20 px-5 justify-center bg-primary text-white' id='projects'>
        <div className='w-full md:w-1/2'>
            <div className='justify-center'>
              <h1 className=' text-4xl border-b-4 border-[#9acd32] mb-5 w-[150px] font-bold'> Projects</h1>
              <p className='py-5'>These are some of my best projects.I have built this with React,Java,MERN technologies.</p>
              <p className='py-5'>1.Twitter Clone Web App – A social media platform where users can post, like, and interact with tweets.</p>
              <p className='py-5'>2.Task Manager App – A tool to create, manage, and organize tasks with real-time updates.</p>
              <p className='py-5'>3.To-Do List App – A simple app to add, edit, and delete daily tasks.</p>
              <p className='py-5'>4.E-Commerce Website – An online store with product listings, shopping cart, and payment integration.</p>
              
            </div>
        </div>

        <div className='w-full md:w-1/2 flex justify-center'>
           <div className='flex overflow-x-auto snap-x snap-mandatory w-[600px] h-[400px] border-2 border-[#9acd32] p-2 gap-3 relative'>
               {config.projects.map((projects)=>(
                  <div className='relative h-full w-full bg-white  object-cover snap-start rounded-lg flex-shrink-0'>
                     <img className='w-full h-full' src={projects.image} alt="Eccomence website" />
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
