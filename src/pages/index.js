import * as React from "react"
import {Helmet} from "react-helmet";

import PageHeader from "../components/page-header"
import PageBody from "../components/page-body"
import PageFooter from "../components/page-footer"

import PartialPatreon from "../components/partial-patreon"

// Styles
const mainStyles = {
}

const pageBodyStyles = {
  maxWidth: "640px",
}

// Markup
const IndexPage = () => {
  return (
    <main style={mainStyles}>

      <Helmet>
        <title>V4EX Inc. | v4ex.com</title>
        <meta name="keywords" content="v4ex, V4EX, V4EX Inc., Penthouse, Sky Penthouse, Skyscraper, Cryptocurrency, Blockchain" />
        <meta name="description" content="The main business of V4EX Inc. is to do acquisitions of sky penthouse of iconic skyscrapers in major cities around the world. Customers use V4EX cryptocurrency as the payment method.
" />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "44b132e799cf445fb6a2fb26efcdffed"}'></script>
      </Helmet>
      
      <PageHeader />

      <hr />

      <PageBody style={pageBodyStyles} />

      <hr />

      <PartialPatreon />

      <hr />

      <PageFooter />

    </main>
  )
}

export default IndexPage
