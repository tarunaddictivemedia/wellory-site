import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export default function ServiceDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <section className="servicessec servicealllisting">
                <div className="container">
                    <div className="header-box">
                        <h2>{ title }</h2>
                        <p>{ stack }</p>
                    </div>
                    <div className="serviceimg">
                        <Img fluid={featuredImg.childImageSharp.fluid} />
                    </div>
                    <div className="content header-box" dangerouslySetInnerHTML={{ __html: html}} />

                </div>
            </section>
        </Layout>
    )
}
export const query = graphql`
    query ServiceDetailPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                stack
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
  
`