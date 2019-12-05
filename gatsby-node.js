const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const PageTemplate = path.resolve('./src/templates/Page.jsx')
    resolve(
      graphql(
        `
          {
            allContentfulPage{
              edges {
                node {
                  id
                  slug
                  content{
                    __typename
                      ... on Node {
                        ... on ContentfulPersonBar{
                        people{
                            picture{
                                file{
                                    url
                                }
                            }
                          name
                          title
                          interestingFact
                        
                          }
                        }
                      }
                      }
                }
              }
            }
          }
          `
        ).then(result => {

        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allContentfulPage.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: PageTemplate,
            context: {
              slug: edge.node.slug
            },
          })
        })
        return
      })
    )
  })
}