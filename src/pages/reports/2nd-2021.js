import * as React from "react"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"

import PageHeader from "../../components/page-header--slim"
import PageBody from "../../components/page-body"
import PageFooter from "../../components/page-footer--back-to-homepage"


// Styles
const mainStyles = {
}

const pageBodyStyles = {
}

// Markup
const Reports2nd2021Page = () => {
  return (
    <main style={mainStyles}>

      <Helmet>
        <title>V4EX Inc. Financial Reports - 2nd Quarter, 2021 | v4ex.com</title>
        <meta name="keywords" content="2nd Quarter, 2021, Financial reports, Reports, v4ex, V4EX, V4EX Inc., Penthouse, Sky Penthouse, Skyscraper, Cryptocurrency, Blockchain" />
        <meta name="description" content="2nd Quarter, 2021 Financial reports of V4EX Inc.." />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "32963782ecff40ec97b4beaccbf97b54"}'></script>
        <style type="text/css">{`
          h2 {
            text-align: center;
          }

          table, th, td {
            border: 1px solid #000;
          }

          table {
            margin: 0 auto;
            table-layout: auto;
          }

          th, td{
            padding: 1em;
          }

        `}</style>
      </Helmet>
      
      <PageHeader />

      <hr />

      <PageBody style={pageBodyStyles}>
        <h2>Financial Reports - 2nd Quarter, 2021</h2>
        <span><Link to="/reports">Back to reports index</Link></span>
        
      </PageBody>

      <hr />

      <PageFooter />

    </main>
  )
}


export default Reports2nd2021Page
