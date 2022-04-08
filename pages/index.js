import React from "react"
import Articles from "../components/articles"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import NextImage from "../components/image"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="pl-8 ">
        <div className="pl-8 pr-8  ">
          <div className="pb-4">
            <h1 className="text-4xl uk-tile-default">{homepage.attributes.hero.title}</h1>
          </div>
          <div >
            <NextImage image={homepage.attributes.hero.heroImage} className="h-screen" />
          </div>
          <div className="pt-4">
            <p className="text-xl">{homepage.attributes.hero.info}</p>
          </div>
          <div className="article-section pt-8">
            <div className="article-section">
              <h2 className="text-4xl ">Articles</h2>
            </div>
            <div className="pt-4">
              <Articles articles={articles} />
            </div>
            <div className="uk-tile-default  ">
              <h1 className="text-4xl ">
                about us
              </h1>
              <div className=" pr-8 pt-8 pb-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tincidunt consectetur,
                  nisi urna aliquet nunc, eget tincidunt nisl nunc euismod
                  nunc.
                </p>
              </div>
            </div>
            <div className="uk-tile-default">
              <h1 className="text-4xl ">
                contact
              </h1>
              <div className=" pr-8 pt-8 pb-8">
                <p>
                  Submit your scary photo so we can investigate and get back to you.
                </p>
                <form>
                  <fieldset className="uk-fieldset pt-8">

                    {/* <legend className="uk-legend">Legend</legend> */}

                    <div className="uk-margin">
                      <input className="uk-input" type="text" placeholder="Name" />
                    </div>

                    <div className="uk-margin">
                      <select className="uk-select">
                        <option>Investigate</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="uk-margin">
                      <textarea className="uk-textarea" rows="5" placeholder="Message"></textarea>
                    </div>

                    {/* <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input className="uk-radio" type="radio" name="radio2" checked /> A</label>
                      <label><input className="uk-radio" type="radio" name="radio2" /> B</label>
                    </div> */}

                    {/* <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input className="uk-checkbox" type="checkbox" checked /> A</label>
                      <label><input className="uk-checkbox" type="checkbox" /> B</label>
                    </div> */}

                    {/* <div className="uk-margin">
                      <input className="uk-range" type="range" value="2" min="0" max="10" step="0.1" />
                    </div> */}

                  </fieldset>
                </form>
              </div>

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
