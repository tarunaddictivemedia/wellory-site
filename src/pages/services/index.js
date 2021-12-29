import { graphql, Link } from "gatsby"
import React from 'react'
import Layout from "../../components/Layout"
import Img from 'gatsby-image'
export default function Listing({ data }) {
  console.log(data)
  const serviceslisting = data.allMarkdownRemark.nodes
  const bannertitle = "All Listing"
  return (
    <Layout>
      <section className="servicessec servicealllisting">
        <div className="container">
          <div className="header-box">
            <h2>{ bannertitle }</h2>
          </div>
          <div className="serviceslide__er">
            {serviceslisting.map((service, i) => (
              <div className="serviceslide">
                <Link to={"/services/" + service['frontmatter'].slug} 
                key={i}>
                <div className="serviceslide__e">
                  <Img fluid={ service.frontmatter.thumb.childImageSharp.fluid } />
                  <h3>{ service.frontmatter.title }</h3>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

//export page query

export const query = graphql`
  query ServiceInfoPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`