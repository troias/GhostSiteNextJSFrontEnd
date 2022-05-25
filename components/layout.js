import Nav from "./nav"
import Footer from './footer'
import AuthContext from "../context/authContext"
import { useContext } from "react"
import Modal from "./modal"

const Layout = ({ children, categories, seo, showModal, footer, logo }) => { 
  const ctx = useContext(AuthContext);
  
  return (

  <>
    <Nav categories={categories} showModal={showModal} logo={logo}  />
    <Modal show={ctx.showModal} onClose={ctx.setShowModal}/>
    {children}

    <Footer data={footer}/>
  </>
)}

export default Layout
