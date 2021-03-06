import * as React from "react"

import AppBar from "./app-bar"


// Styles
const pageHeaderStyles = {
  textAlign: "center",
}

// Markup
const PageHeaderComponent = () => {
  return (
    <>
      <div style={pageHeaderStyles}>
        <h1>V4EX Inc.</h1>
        <p>651 North Broad Steet, Suite 206</p>
        <p>Middletown, DE 19709, USA</p>
        <p>Official Homepage</p>
      </div>
      <AppBar />
    </>
  )
}


export default PageHeaderComponent
