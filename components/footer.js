import React from 'react'
import {BsInstagram}  from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {AiOutlineYoutube} from 'react-icons/ai'
import { useRouter } from 'next/router'

 const Footer = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'


  return (
    <div className="uk-container border-t-2 ">
        <div className="uk-text-center pb-8 pt-8 ">
          <p className="text-xl">
            Follow us on social media
          </p>
          <div className="flex justify-center mt-4">

            <a href="https://www.facebook/the_nobodies/" target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook className="text-2xl mr-4" />
            </a>
            <a href="https://twitter.com/the_nobodies" target="_blank" rel="noopener noreferrer">
          <TiSocialTwitterCircular className="text-2xl mr-4" />
            </a>
            <a href="https://www.youtube.com/channel/UC-lQlZJWLhj4_JYXw8Zjz1w" target="_blank" rel="noopener noreferrer">
          <AiOutlineYoutube className="text-2xl mr-4" />
            </a>
            <a href="https://www.instagram.com/the_nobodies/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="text-2xl mr-4" />
            </a>
          </div>
          
     
        </div>
        <div className="uk-text-center pb-4">
        <p className="text-sm">
        © 2022 TheNobodies. All rights reserved.
        </p>
        </div>

      
        
        </div>
  )
}

export default Footer
