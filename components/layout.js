import Nav from "./nav"
import Footer from './footer'

const Layout = ({ children, categories, seo, showModal }) => (
  <>
    <Nav categories={categories} showModal={showModal} />
    {children}

    <Footer />
  </>
)

export default Layout
