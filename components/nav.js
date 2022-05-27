import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { ScrollContext } from "../context/scrollContext"
import { AuthContext } from "../context/authContext";
import NextImage from "../components/image"
import Portal from "../components/portal"
import Modal from "../components/modal"
import { useRouter } from "next/router";

const Nav = ({ categories, logo }) => {

  const ctx = useContext(ScrollContext);
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const scrollToRef = (ref) => ref.current && ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const handleAboutClick = () => scrollToRef(ctx.aboutRef)
  const handleContactClick = () => scrollToRef(ctx.contactRef)


  return (

    <div>
      <nav className="uk-navbar-container flex  pr-4" data-uk-navbar>
        <div className="uk-navbar-left ">
          <ul className="uk-navbar-nav  ml-3 lg:ml-0">
            <ul className="uk-nav uk-navbar-dropdown-nav "></ul>
            <li className=" " >
              <Link href="/">
              <img className="  h-[30px] w-[100px] md:w-[250px]  "  src={logo.data.attributes.url} alt={logo.data.attributes.alternativeText} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right  ">

          <ul className="uk-navbar-nav hidden sm:flex">

            <li className="smoothscroll" onClick={ctx.aboutRef.current && handleAboutClick}>
              <Link href={router.asPath === '/' ? '#About' : '/#About'}>
                  About
              </Link>
            </li>
            <li className="smoothscroll" onClick={ctx.contactRef.current  && handleContactClick}>
              <Link href={router.asPath === '/' ? '#Contact' : '/#Contact'}>
                Contact
              </Link>
            </li>
          </ul>

          <ul className="uk-navbar-nav">
            <li>
              <a href="#">Categories</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  {categories.map((category) => {
                    return (
                      <li key={category.id} className="pl-2 pr-2" >


                        <Link href={`/category/${category.attributes.slug}`}>
                          <a >{category.attributes.name}</a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>

            <li className="flex items-center">
            {!authCtx.user && <button className="uk-button uk-button-default uk-margin-small-right"
            onClick={() => authCtx.setModalOpen(true) }>Login</button>}
          { authCtx.user &&  <button className="uk-button uk-button-default uk-margin-small-right"
            onClick={() => authCtx.logOutUser()}>Logout</button>}
            </li>
          </ul>

        </div>

      </nav>
   
    </div>

  
  )
}

export default Nav
