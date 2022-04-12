import React from "react"
import Articles from "../components/articles"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutUs from "../components/about-us"
import ContactUs from "../components/contact-us"


import { fetchAPI } from "../lib/api"







const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className=" ">
        <div className="pl-8 pr-8 ">
      


          <div className="article-section pt-8  ">



              <Hero herodata={homepage} /> 
              <Articles articles={articles} />
              <AboutUs aboutData={homepage}/> 
              <ContactUs />
       

            {/* about component */}



   



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
