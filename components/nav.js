import React, {useState} from "react"
import Link from "next/link"
import NextImage from "../components/image"
import Portal from "../components/portal"
import Modal from "../components/modal"

const Nav = ({ categories, showModal }) => {



  const [modal, setModal] = useState(false)

  // const toggleModal = () => {
  //   setModal(!modal)
  //   showModal(modal)
  // }

  const handleCloseClick = (e) => {
    e.preventDefault()
    setModal(false)
  }

  return (
    <>
    <div>
      <nav className="uk-navbar-container flex pl-10 pr-4" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <ul className="uk-nav uk-navbar-dropdown-nav"></ul>
            <li className="m-0">
              <Link href="/">
                <a>TheNobodies</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right  ">

          <ul className="uk-navbar-nav hidden sm:flex">

            <li className="">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="">
              <Link href="#contact">
                <a>Contact</a>
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
            <button class="uk-button uk-button-default uk-margin-small-right"
            onClick={() => showModal(true)}>   Login</button>
                  
        

            </li>
          </ul>

        </div>

      </nav>
   
    </div>

     </>
  )
}

export default Nav
