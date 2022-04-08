import React from "react"
import Link from "next/link"
import NextImage from "../components/image"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container flex pl-10 pr-4" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav ">
            <ul class="uk-nav uk-navbar-dropdown-nav"></ul>
            <li className="">
              <Link href="/">
                <a>Scary Site</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right  ">

 
          <ul class="uk-navbar-nav">
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
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
        </ul>

        </div>

      </nav>
    </div>
  )
}

export default Nav
