import { graphql, Link } from "gatsby"
import React from 'react'
import Layout from "../components/Layout"
import Img from 'gatsby-image'
import Foodmodule from '../components/foodmodule'
import './slick.css'
export default function Home({ data }) {
  console.log(data)
  const services = data.allMarkdownRemark.nodes
  const bannertitle = "Dump dieting for good."
  const bannerdescription = "Because here's the thing: It doesn't deserve you."
  return (
    <Layout>
      <section className="bannercontent">
        <div className="container">
          <div className="sec-row">
            <div className="bannerinnr-row">
              <h1>{ bannertitle }</h1>
              <p>{ bannerdescription }</p>
            </div>
            <div className="bannerinnr-img">
              <Img fluid={ data.file.childrenImageSharp[0].fluid } />
            </div>
          </div>
        </div>
      </section>
      <section className="servicessec">
        <div className="container">
          <div className="header-box">
            <h2>In a relationship <br></br>with:food
            </h2>
          </div>
          <div className="serviceslide__er">
              {services.map((service, i) => (
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
      <Foodmodule />
    </Layout>
  )
}

//export page query

export const query = graphql`
  query ServicePage {
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
  file(relativePath: {eq: "banner-img.png"}) {
    childrenImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
