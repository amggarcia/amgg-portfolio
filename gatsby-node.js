const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `projects` })
        createNodeField({
            node,
            name: `slug`,
            value: `projects${slug}`,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions // highlight-line
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/project-description.js'),
            context: {
                slug: node.fields.slug,
            },
        }
        )
    })
}