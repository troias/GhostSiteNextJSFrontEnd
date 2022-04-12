import React from 'react'
import {BsInstagram}  from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {AiOutlineYoutube} from 'react-icons/ai'

 const AboutUs = (props) => {
   
  return (
    <div className="uk-tile-default  border-t-2 ">
    <h1 className="text-4xl pt-8 ">
      about us
    </h1>
    <div className=" pr-8 pt-8 pb-8 md:flex">
      <div className=" md:w-1/2">

    
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque euismod, urna eu tincidunt consectetur,
        nisi urna aliquet nunc, eget tincidunt nisl nunc euismod
        nunc.
      </p>
      </div>
      <div className=" md:visible md:w-1/2 md:pl-8 md:flex md:justify-center">
        
      <div className="uk-text-center  w-full flex justify-around md:w-2/3">
       <BsInstagram size={40}/>
       <AiOutlineFacebook size={50}/>
       <TiSocialTwitterCircular size={50}/>
       <AiOutlineYoutube size={50}/>
      </div>
        
      </div>
    </div>
  </div>
  )
}

export default AboutUs
