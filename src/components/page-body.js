import * as React from "react"

// Styles
const rowStyles = {
  display: "flex",
}
const columnStyles = {
  flex: "50%",
}

const listLeftStyles = {
  marginLeft: "50%",
}
const listRightStyles = {
  marginRight: "50%",
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 18,
  maxWidth: 560,
  marginBottom: 30,
}

// Markup
const PageBodyComponent = () => {
  return (
    <div className="page-body" style={rowStyles}>

      <div style={columnStyles}>
        <ul style={listLeftStyles}>
          <li style={listItemStyles}><a href="#">A Message From Xuwei Li</a></li>
          <li style={listItemStyles}><a href="#">Annual & Interim Reports</a></li>
        </ul>
      </div>
      <div style={columnStyles}>
        <ul style={listRightStyles}>
          <li style={listItemStyles}><a href="#">Seed Funding Financing</a></li>
          <li style={listItemStyles}><a href="#">Common Stock Information</a></li>
        </ul>
      </div>
      
    </div>
  )
}


export default PageBodyComponent
