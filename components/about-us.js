import React, {useRef, useContext, useEffect} from 'react'
import { ScrollContext } from '../context/scrollContext'
import {BsInstagram}  from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {AiOutlineYoutube} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { useRouter } from 'next/router'

 const AboutUs = ({aboutData}) => {
   const {about} = aboutData.attributes
   const ctx = useContext(ScrollContext);
  
    const router = useRouter();
  

   
  
  useEffect(() => {
     
    if (ctx.aboutRef.current) {
      if (router.asPath === "/#About") {
  
        ctx.aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    }

   


  }, []);
 

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
       

          <a href={about.social_links[0].url}  rel="noopener noreferrer">
              <BsInstagram size={50}/>
             </a>
              <a href={about.social_links[1].url} target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook size={50}/>
               </a>
               <a href={about.social_links[2].url} target="_blank" rel="noopener noreferrer">
              <TiSocialTwitterCircular size={50}/>
               </a>
               <a href={about.social_links[3].url} target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube size={50}/>
               </a>
               <a href={about.social_links[4].url} target="_blank" rel="noopener noreferrer">
              <RiMessengerLine size={50}/>
               </a>
      </div>
  
        
      </div>
    </div>
  </div>
  </section>
  )
}

export default AboutUs
