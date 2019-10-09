import React from "react"
import {graphql} from 'gatsby'

import Convocatoria from "../components/convocatoria"

export default () => <Convocatoria data={data}/>


export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`