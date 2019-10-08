import React from "react"
import { graphql } from "gatsby"

import Container from "../components/container"

const ConvocatoriaPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  const [node] = edges
  console.log(node)

  return (
    <Container style={{ marginTop: 50 }}>
      <div className="ui two column centered grid">
        <div className="column">
          <div className="ui card">
            <div className="content">
              <h1 className="ui aligned center green header">Coisas</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
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
