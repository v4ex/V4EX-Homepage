// Import
import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


// Styles
const pageFooterStyles = {
  textAlign: "right",
}
// Styles: Font Awesome
library.add(fab)


// Markup
const PageFooterComponent = () => {
  return (
    <div style={pageFooterStyles}>
      <p><a href="https://github.com/v4ex/V4EX-Homepage"><FontAwesomeIcon icon={["fab", "github"]} /></a> Copyright &copy; {new Date().getFullYear()} V4EX Inc.</p>
    </div>
  )
}


// Export
export default PageFooterComponent
