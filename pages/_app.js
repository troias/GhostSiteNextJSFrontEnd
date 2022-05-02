import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import {useState} from 'react'
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { AuthProvider } from "../context/authContext"
import { ScrollProvider } from "../context/scrollContext"
import Layout from "../components/layout"
import "../styles/global.css"

// Store Strapi Global object in context
export const GlobalContext = createContext({})



const MyApp = ({ Component, pageProps, categories }) => {
  const [showModal, setShowModal] = useState(false);
  const { global } = pageProps
  const footerData = global.attributes.footer
  console.log("footerDataApp", global);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <AuthProvider>
          <ScrollProvider>
          <Layout showModal={setShowModal} categories={categories} footer={footerData} >
        <Component {...pageProps} />
        
        </Layout>
        </ScrollProvider>
        </AuthProvider>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      footer: {
        populate: "*",
      },
    },
  })
  const categoriesRes = await fetchAPI("/categories", {
    populate: "*",
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data }, categories: categoriesRes.data }
}

export default MyApp
