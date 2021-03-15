import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, getSrc, StaticImage } from 'gatsby-plugin-image'
import img from '../images/image-4.jpeg'
// import img2 from '../images/image-3.jpeg'

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 400
          height: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          transformOptions: { fit: COVER }
        )
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    constrained: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 50
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  // console.log(data)
  // const fixedImage = data.fixed.childImageSharp.gatsbyImageData
  const fixedImage = getImage(data.fixed)
  const fluidImage = getImage(data.fluid)
  const constrained = getImage(data.constrained)

  return (
    <section className="image">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="tom" width="100%" />
        <h2>content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image/blue</h3>
        <GatsbyImage alt="Daraa solih" image={fixedImage} />
        <h2>content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <GatsbyImage alt="daraa" image={fluidImage} />
        <h2>content</h2>
        <div className="small_disabled">
          <GatsbyImage alt="daraa" image={constrained} />
        <h2>content</h2>
        </div>
      </article>
    </section>
  )
}

export default Images
