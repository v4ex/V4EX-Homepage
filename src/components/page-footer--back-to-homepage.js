// Import
import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


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
// Styles: Font Awesome
library.add(fab)


// Markup
const PageFooterComponent = () => {
  const link = process.env.LINK_FOOTER_GITHUB
  return (
    <div style={pageFooterStyles}>
      <p style={backToHomepageStyles}><Link to="/">Back to homepage</Link></p>
      <p style={copyrightStyles}><a href={link}><FontAwesomeIcon icon={["fab", "github"]} /></a> Copyright &copy; {new Date().getFullYear()} V4EX Inc.</p>
    </div>
  )
}


// Export
export default PageFooterComponent
