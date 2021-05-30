import * as React from "react"
import { Link } from "gatsby"

// Styles
const pageFooterStyles = {
}
const backToHomepageStyles = {
  display: "inline-block",
}
const copyrightStyles = {
  display: "inline-block",
  float: "right",
}

// Markup
const PageFooterComponent = () => {
  return (
    <div style={pageFooterStyles}>
      <p style={backToHomepageStyles}><Link to="/">Back to homepage</Link></p>
      <p style={copyrightStyles}>Copyright &copy; {new Date().getFullYear()} V4EX Inc.</p>
    </div>
  )
}


export default PageFooterComponent
