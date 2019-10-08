import React from "react"
import { graphql } from "gatsby"

import styles from "./convocatoria.module.css"

const ConvocatoriaPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  const [first] = edges
  const { node } = first
  console.log("..", node.html)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Convocatória</h1>
      <section dangerouslySetInnerHTML={{ __html: node.html }}></section>
    </div>
  )
}

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

export default ConvocatoriaPage
