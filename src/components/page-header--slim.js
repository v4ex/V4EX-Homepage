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
      </div>
      <AppBar />
    </>
  )
}


export default PageHeaderComponent
