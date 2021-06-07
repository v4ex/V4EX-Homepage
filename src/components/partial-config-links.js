import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PartialLinksComponent from "../components/partial-links"


// Utility
const parseConfig = data => {
  let config = {}
  data.allContentfulConfig.edges.map(entry => {
    let item = entry.node
    config[item.key] = JSON.parse(item.value.internal.content).contentful_id
  })

  return config
}


// Markup
const PartialConfigLinksComponent = (props) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulConfig(
        filter: {node_locale: {eq: "en-US"}}
      ) {
        edges {
          node {
            key
            value {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `)

  const parsedData = parseConfig(data)

  return (
    <>
      <PartialLinksComponent contentful_id={parsedData[props.configKey]} />
    </>
  )
}


export default PartialConfigLinksComponent
