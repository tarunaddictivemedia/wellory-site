const path = require('path')
exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query ServicePage {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)


    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/services/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/service-detail.js'),
            contenxt: { slug: node.frontmatter.slug }
        })
    })


}