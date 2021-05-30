import * as React from "react"

// Markup
const PageBodyComponent = (props) => {
  return (
    <div className="page-body" style={props.style}>
      {props.children}
    </div>
  )
}


export default PageBodyComponent
