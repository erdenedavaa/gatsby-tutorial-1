import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      image,
      info: { info },
    },
  },
}) => {
  const fixedImage = getImage(image)

  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <Link to="/products">Back to products page</Link>
        <h1>Single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <GatsbyImage image={fixedImage} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button type="submit">add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  # $slug ni gatsby-node.js context-ees irne
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        gatsbyImageData(
          layout: FIXED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
