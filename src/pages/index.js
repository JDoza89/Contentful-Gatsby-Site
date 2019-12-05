import React from "react"
import { Link, graphql } from "gatsby"


const Page = ({node}) => {
  return(
    <li key={node.id}>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const IndexPage = ({data}) => (
<ul>
  {data.allContentfulPage.edges.map((edge) => <Page node={edge.node}/>)}
</ul>
)

export default IndexPage

export const pageQuery = graphql`
  query homePageQuery{
    allContentfulPage(filter:{
      node_locale: {eq:"en-US"}
    }){
      edges{
        node{
          title
          slug
          id
        }
      }
    }
  }`
