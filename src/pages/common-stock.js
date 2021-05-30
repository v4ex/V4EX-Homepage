import * as React from "react"
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"

import PageHeader from "../components/page-header--slim"
import PageBody from "../components/page-body"
import PageFooter from "../components/page-footer--back-to-homepage"


// Styles
const mainStyles = {
}

const pageBodyStyles = {

}

const dlStyles = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
}
const dtStyles = {
  flex: "0 0 50%",
  padding: "2px 4px",
  background: "#333",
  textAlign: "right",
  color: "#fff",
  margin: "4px",
}
const ddStyles = {
  flex: "1 0 50%",
  padding: "2px 4px",
  borderBottom: "1px solid #333",
  marginLeft: "auto",
  textAlign: "right",
}


// Markup
const CommonStockSummary = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulCommonStock(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          amount
          contentful_id
          contentfulid
          issue
          lockUp
          shareholder {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
  `)
  return (
    <div class="common-stock-summary">
      <dl style={dlStyles}>
        {data.allContentfulCommonStock.edges
          .sort((a, b) => a.node.amount > b.node.amount ? -1 : 1)
          .map((entry) => {
            let item = entry.node
            return(
              <div>
                {item.shareholder &&
                <dt style={dtStyles}>{item.shareholder.firstName} {item.shareholder.lastName}</dt>}
                {!item.shareholder &&
                <dt style={dtStyles}>Undeployed</dt>}
                <dd style={ddStyles}>{new Intl.NumberFormat().format(item.amount)}</dd>
              </div>
            )
        })}
      </dl>
    </div>
  )
}

const CommonStockPage = () => {
  return (
    <main style={mainStyles}>

      <Helmet>
        <title>V4EX Inc. | v4ex.com</title>
        <meta name="keywords" content="v4ex, V4EX, V4EX Inc., Penthouse, Sky Penthouse, Skyscraper, Cryptocurrency, Blockchain" />
        <meta name="description" content="The main business of V4EX Inc. is to do acquisitions of sky penthouse of iconic skyscrapers in major cities around the world. Customers use V4EX cryptocurrency as the payment method.
" />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "32963782ecff40ec97b4beaccbf97b54"}'></script>
      </Helmet>
      
      <PageHeader />

      <hr />

      <PageBody style={pageBodyStyles}>
        <CommonStockSummary />
      </PageBody>

      <hr />

      <PageFooter />

    </main>
  )
}


export default CommonStockPage
