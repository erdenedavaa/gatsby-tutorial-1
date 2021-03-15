import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/layout'
// import styles from '../components/products.module.css'

const ProductsStyles = styled.div`
  width: 90vw;
  max-width: 1170px;
  text-transform: capitalize;
  margin: 0 auto;

  div {
    height: 15rem;
  }

  span {
    margin-left: 2rem;
    color: grey;
  }

  article {
    margin: 2rem 0;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  // nodes iig products gej rename hiilee
  console.log(products)

  return (
    <Layout>
      <ProductsStyles>
        {products.map((product) => {
          const productImage = getImage(product.image)
          return (
            <article key={product.id}>
              <GatsbyImage image={productImage} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </ProductsStyles>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export default Products
