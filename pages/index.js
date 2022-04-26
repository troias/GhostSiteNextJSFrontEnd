import React, {useState, useContext, useEffect} from "react"
import AuthContext from "../context/authContext";
import Articles from "../components/articles"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutUs from "../components/about-us"
import ContactUs from "../components/contact-us"
import Modal from "../components/modal"
import Portal from "../components/portal"


import { fetchAPI } from "../lib/api"







const Home = ({ articles, categories, homepage }) => {

  const ctx = useContext(AuthContext);

  // console.log("user", ctx.user);

  useEffect(() => {
    if (!ctx.user && localStorage.getItem("user")) {
      ctx.setUser(JSON.parse(localStorage.getItem("user")));
     
    }

  }, [])


  const [showModal, setShowModal] = useState(false);

  console.log("showModal", showModal) 

  return (
    <Layout showModal={setShowModal} categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className=" ">
        <div className="pl-8 pr-8 ">
          <div className="article-section pt-8  ">
              <Hero herodata={homepage} /> 
                  <Modal show={showModal} onClose={setShowModal}/>
              <Articles articles={articles} />
              <AboutUs aboutData={homepage}/> 
              <ContactUs />
        

          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: { populate: "*" },
        seo: { populate: "*" },

      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
