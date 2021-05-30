import * as React from "react"

// Styles
const rowStyles = {
  display: "flex",
}
const columnStyles = {
  flex: "50%",
}

// Markup
const PageBodyComponent = (props) => {
  return (
    <div className="page-body" style={props.style}>

      <div style={rowStyles}>
        <div style={columnStyles}>
          {props.children[0]}
        </div>
        
        <div style={columnStyles}>
          {props.children[1]}
        </div>
      </div>

    </div>
  )
}


export default PageBodyComponent
