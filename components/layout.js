import Nav from "./nav"
import Footer from './footer'

const Layout = ({ children, categories, seo, showModal, footer }) => (
  <>
    <Nav categories={categories} showModal={showModal} />
    {children}

    <Footer data={footer}/>
  </>
)

export default Layout
