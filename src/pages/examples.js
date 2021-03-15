import React from 'react'
import { graphql } from 'gatsby'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h2>Hello from examples page</h2>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const yamarchNerteiBaijBolno = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        description
        data
        title
      }
    }
  }
`

export default examples
