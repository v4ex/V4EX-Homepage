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
const ReportsIndexPage = () => {
  return (
    <main style={mainStyles}>

      <Helmet>
        <title>V4EX Inc. Financial Reports | v4ex.com</title>
        <meta name="keywords" content="Financial reports, Reports, v4ex, V4EX, V4EX Inc., Penthouse, Sky Penthouse, Skyscraper, Cryptocurrency, Blockchain" />
        <meta name="description" content="Financial reports of V4EX Inc.." />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "32963782ecff40ec97b4beaccbf97b54"}'></script>
        <style type="text/css">{`
          h2 {
            text-align: center;
          }

          table {
            margin: 0 auto;
            table-layout: auto;
          }

          th, td {
            padding: 0.5em 1em;
          }

          th {
            background: #333;
            color: #fff;
          }

          td {
            text-align: center;
          }

        `}</style>
      </Helmet>
      
      <PageHeader />

      <hr />

      <PageBody style={pageBodyStyles}>
        <h2>Financial Reports</h2>
        <table class="reports-table">
          <thead>
           <tr>
              <th>Year</th>
              <th>1st Quarter</th>
              <th>2nd Quarter</th>
              <th>3rd Quarter</th>
              <th>Annual*</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>2021</td>
              <td>N/A</td>
              <td><Link to="2nd-2021">2nd</Link></td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </PageBody>

      <hr />

      <PageFooter />

    </main>
  )
}


export default ReportsIndexPage
