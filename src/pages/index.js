import * as React from "react"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"

import PageHeader from "../components/page-header"
import PageBody from "../components/page-body--2cols-even"
import PageFooter from "../components/page-footer"

import PartialPatreon from "../components/partial-patreon"
import PartialContact from "../components/partial-contact"

// Styles
const mainStyles = {
}

const pageBodyStyles = {
}
const leftColumnListStyles = {
  marginLeft: "50%",
}
const rightColumnListStyles = {
  marginRight: "50%",
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 18,
  maxWidth: 560,
  marginBottom: 30,
}

// Markup
const LeftColumn = () => {
  return (
    <div className="page-body--left-column">
      <ul style={leftColumnListStyles}>
        <li style={listItemStyles}>V4EX Inc. Brochure <a href="https://twitter.com/v4ex/status/1397235609723412490">English</a> <a href="https://twitter.com/v4ex/status/1397235994018172942">中文</a></li>
        <li style={listItemStyles}>Annual & Interim Reports</li>
      </ul>
    </div>
  )
}

const RightColumn = () => {
  return (
    <div className="page-body--left-column">
      <ul style={rightColumnListStyles}>
        <li style={listItemStyles}>Seed Funding Financing <a href="https://twitter.com/v4ex/status/1397288204294758402">English</a> <a href="https://twitter.com/v4ex/status/1397288516699049989">中文</a> &nbsp;&nbsp;&nbsp; <a href="https://file.v4ex.com/formd.pdf">FORM D</a></li>
        <li style={listItemStyles}><Link to="/common-stock">Common Stock Information</Link></li>
      </ul>
    </div>
  )
}

const IndexPage = () => {
  return (
    <main style={mainStyles}>

      <Helmet>
        <title>V4EX Inc. | v4ex.com</title>
        <meta name="keywords" content="Company, Official website, v4ex, V4EX, V4EX Inc., Penthouse, Sky Penthouse, Skyscraper, Cryptocurrency, Blockchain" />
        <meta name="description" content="V4EX Inc. makes acquisitions of sky penthouse of iconic skyscrapers for lease. Utilize V4EX cryptocurrency as payment." />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "32963782ecff40ec97b4beaccbf97b54"}'></script>
      </Helmet>
      
      <PageHeader />

      <hr />

      <PageBody style={pageBodyStyles}>
        <LeftColumn />
        <RightColumn />
      </PageBody>

      <hr />

      <PartialPatreon />

      <hr />

      <PartialContact />

      <hr />

      <PageFooter />

    </main>
  )
}


export default IndexPage
