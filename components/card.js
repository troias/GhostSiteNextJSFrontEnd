import React, {useEffect} from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article, investigation }) => {
  const field = (investigation) ? investigation : article 
  const page = (investigation) ? "investigation" : "article"

  


  return (
    <Link href={`/${page}/${field.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
          { field.attributes.image &&  <NextImage image={field.attributes.image} /> }
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {field.attributes.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {field.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
   
  )
}

export default Card
