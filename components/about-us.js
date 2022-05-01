import React, {useRef, useContext, useEffect} from 'react'
import { ScrollContext } from '../context/scrollContext'
import {BsInstagram}  from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {AiOutlineYoutube} from 'react-icons/ai'


 const AboutUs = ({aboutData}) => {
   const {about} = aboutData.attributes
   const ctx = useContext(ScrollContext);
  

  



 

  return (
    <section id="#About" ref={ctx.aboutRef} >
    <div className="uk-tile-default  border-t-2 ">
    <h1 className="text-4xl pt-8 ">
      {about.title}
    </h1>
    <div className=" pr-8 pt-8 pb-8 md:flex">
      <div className=" md:w-1/2">

    
      <p>
     {about.info}
      </p>
      </div>
      <div className=" md:visible md:w-1/2 md:pl-8 md:flex md:justify-center">
        
      <div className="uk-text-center  w-full flex justify-around md:w-2/3 p-8">
       

          <a href={""} target="_blank" rel="noopener noreferrer">
              <BsInstagram size={50}/>
             </a>
              <a href={""} target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook size={50}/>
               </a>
               <a href={""} target="_blank" rel="noopener noreferrer">
              <TiSocialTwitterCircular size={50}/>
               </a>
               <a href={""} target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube size={50}/>
               </a>
      </div>
  
        
      </div>
    </div>
  </div>
  </section>
  )
}

export default AboutUs
