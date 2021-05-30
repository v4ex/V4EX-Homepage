import * as React from "react"

// Styles
const pageFooterStyles = {
  textAlign: "right",
}

// Markup
const PageFooterComponent = () => {
  return (
    <div style={pageFooterStyles}>
      <p>Copyright &copy; {new Date().getFullYear()} V4EX Inc.</p>
    </div>
  )
}


export default PageFooterComponent
