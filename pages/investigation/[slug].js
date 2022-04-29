import React from 'react'
import { fetchAPI } from '../../lib/api'
import Layout from "../../components/layout"
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import NextImage  from '../../components/image'
import Seo from '../../components/seo'
import { getStrapiMedia } from '../../lib/media'

 const Investigation = ({investigation, categories}) => {

  const seo = {
    metaTitle: investigation.attributes.title,
    metaDescription: investigation.attributes.description,
    shareImage: investigation.attributes.image,
    investigation: true,
  }
  const imageUrl = getStrapiMedia(investigation.attributes.image)

  // console.log("investigation", investigation);
  return (
    <Layout categories={categories.data}>
    <Seo seo={seo} />
    <div
      id="banner"
      className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
      data-src={imageUrl}
      data-srcset={imageUrl}
      data-uk-img
    >
      <h1>{investigation.attributes.title}</h1>
    </div>
    <div className="uk-section">
      <div className="uk-container uk-container-small">
        <ReactMarkdown
          source={investigation.attributes.info}
          escapeHtml={false}
        />
        <hr className="uk-divider-small" />
        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
      
          <div className="uk-width-expand">
            <p className="uk-margin-remove-bottom">
              By TheNobodies
            </p>
            <p className="uk-text-meta uk-margin-remove-top">
              <Moment format="MMM Do YYYY">
                {investigation.attributes.published_at}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Investigation

export const getStaticPaths = async () => {
  const investigationRes = await fetchAPI('/investigations', {
    fields: ['slug']
  })
  return {
    paths: investigationRes.data.map(investigation => ({
      params: {
        slug: investigation.attributes.slug
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  // const investigation = await fetchAPI(`/investigations/${params.slug}`)
  // return { props: { investigation } }
  const investigationRes = await fetchAPI('/investigations', {
    filters: {
      slug: params.slug
    },
    populate: '*'
  })
  const categoriesRes = await fetchAPI('/categories')
  return {
    props: {
      investigation: investigationRes.data[0],
      categories: categoriesRes
    },
    revalidate: 1
  }



  

}