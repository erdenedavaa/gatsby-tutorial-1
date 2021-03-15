import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={(data) => <h4>{data.site.info.description}</h4>}
  />
)

export default HeaderStatic
