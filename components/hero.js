import React from 'react'
import NextImage from "./image"

 const Hero = (props) => {
     console.log("heroSectionProps", props)
  return (
    <div className="lg:flex"> 
    <div  className="lg:w-1/2">
      <NextImage image={props.herodata.attributes.hero.heroImage} className="" />
    </div>
    <div className="pt-4 pl-4  pb-8 lg:w-1/2 lg:flex lg:justify-center lg:items-center">
      <p className="text-xl lg:w-10/12  ">{props.herodata.attributes.hero.info}</p>
    </div>
    </div> 
  )
}

export default Hero
