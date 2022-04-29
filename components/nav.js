import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { ScrollContext } from "../context/scrollContext"
import { AuthContext } from "../context/authContext";
import NextImage from "../components/image"
import Portal from "../components/portal"
import Modal from "../components/modal"

const Nav = ({ categories, showModal }) => {

  const ctx = useContext(ScrollContext);
  const authCtx = useContext(AuthContext);
  const [isBrowser, setIsBrowser] = useState(false);


 console.log("ctxUser", authCtx.user);

  useEffect(() => {
    setIsBrowser(true);

   
  }, [])

  if (isBrowser) {
    // console.log("navAboutRef", ctx.aboutRef);
  


  } 
  console.log("contactRef", ctx.contactRef)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const handleAboutClick = () => scrollToRef(ctx.aboutRef)
  const handleContactClick = () => scrollToRef(ctx.contactRef)



  return (
    <>
    <div>
      <nav className="uk-navbar-container flex pl-10 pr-4" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <ul className="uk-nav uk-navbar-dropdown-nav"></ul>
            <li className="m-0" >
              <Link href="/">
                <a>TheNobodies</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right  ">

          <ul className="uk-navbar-nav hidden sm:flex">

            <li className="smoothscroll" onClick={handleAboutClick}>
              <Link href="#About">
                  About
              </Link>
            </li>
            <li className="smoothscroll" onClick={handleContactClick}>
              <Link href="#contact">
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
                          <a className="uk-link-reset">{category.attributes.name}</a>
                        </Link>

                      </li>
                    )
                  })}

                </ul>
              </div>
            </li>
            <li className="flex items-center">
            {!authCtx.user && <button class="uk-button uk-button-default uk-margin-small-right"
            onClick={() => authCtx.setModalOpen(true) }>Login</button>}


          { authCtx.user &&  <button class="uk-button uk-button-default uk-margin-small-right"
            onClick={() => authCtx.logOutUser()}>Logout</button>}

                  
        

            </li>
          </ul>

        </div>

      </nav>
   
    </div>

     </>
  )
}

export default Nav
