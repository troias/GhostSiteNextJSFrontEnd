import React from "react"
import Articles from "../components/articles"
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import NextImage from "../components/image"

const Home = ({ articles, categories, homepage }) => {

  console.log("homePageprops", homepage);

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="pl-8 ">
        <div className="pl-8 pr-8  ">
          <div className="pb-4"> 
        <h1 className="text-4xl">{homepage.attributes.hero.title}</h1>
        </div>
          <div className="">
            <NextImage image={homepage.attributes.hero.heroImage}  className=" h-screen"/> 
          </div>
          <div className="pt-4">
            <p className="text-xl">{homepage.attributes.hero.info}</p>

            </div>


        <div className="article-section pt-8">
          <div className="article-section">
          <h2 className="text-2xl">Articles</h2>
          </div>

          <div className="pt-4">

         
          <Articles articles={articles} />
          </div>

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
