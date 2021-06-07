import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


// Utility
const parseLinks = dataLinks => {
  let links = {}
  dataLinks.allContentfulLink.edges.map(entry => {
    let item = entry.node
    links[item.contentful_id] = links[item.contentful_id] ?? {}
    links[item.contentful_id][item.node_locale] = {
      "title": item.title,
      "url": item.url
    }
  })

  return links
}


// Markup
const PartialLinksComponent = (props) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulLink {
        edges {
          node {
            title
            url
            contentful_id
            node_locale
          }
        }
      }
    }
  `)

  const parsedData = parseLinks(data)

  return (
    <>
      <a href={parsedData[props.contentful_id]["en-US"].url}>English</a> <a href={parsedData[props.contentful_id]["zh-CN"].url}>中文</a>
    </>
  )
}


export default PartialLinksComponent
