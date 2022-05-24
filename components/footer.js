import React from 'react'
import {BsInstagram}  from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {AiOutlineYoutube} from 'react-icons/ai'
import { useRouter } from 'next/router'

 const Footer = ({data}) => {
  const router = useRouter()
  // const isHome = router.pathname === '/'
  // console.log("footerData", data);


  return (
    <div className="uk-container border-t-2 ">
        <div className="uk-text-center pb-8 pt-8 ">
          <p className="text-xl">
           {data.message }
          </p>
          <div className="flex justify-center mt-4">

            <a href={data.footer_social_links[0].url} target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook className="text-2xl mr-4" />
            </a>
            <a href={data.footer_social_links[0].url} target="_blank" rel="noopener noreferrer">
          <TiSocialTwitterCircular className="text-2xl mr-4" />
            </a>
            <a href={data.footer_social_links[0].url} target="_blank" rel="noopener noreferrer">
          <AiOutlineYoutube className="text-2xl mr-4" />
            </a>
            <a href={data.footer_social_links[0].url} target="_blank" rel="noopener noreferrer">
          <BsInstagram className="text-2xl mr-4" />
            </a>
          </div>
          
     
        </div>
        <div className="uk-text-center pb-4">
        <p className="text-sm">
       {data.copyright_text}
        </p>
        </div>

      
        
        </div>
  )
}

export default Footer

