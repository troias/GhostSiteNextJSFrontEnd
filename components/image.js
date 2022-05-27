import { getStrapiMedia } from "../lib/media"
import { useEffect } from "react"
import NextImage from "next/image"

const Image = ({ image, style, customDimensions }) => {
  const { url, alternativeText, width, height } = image.data.attributes


  let layout 
  if (!width || !height && !customDimensions) {
    layout = `fill`

  } else {
    layout = `responsive`
  }

 



  const loader = () => {
    return getStrapiMedia(image)
  }

  
  return (

    <NextImage
      loader={loader}
      layout={layout}
      width={ width || customDimensions.width}
      height={ height || customDimensions.height}  
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
