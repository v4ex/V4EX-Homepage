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
          <li style={listItemStyles}>V4EX Inc. Brochure <a href="https://twitter.com/v4ex/status/1397235609723412490">English</a> <a href="https://twitter.com/v4ex/status/1397235994018172942">中文</a></li>
          <li style={listItemStyles}>Annual & Interim Reports</li>
        </ul>
      </div>
      <div style={columnStyles}>
        <ul style={listRightStyles}>
          <li style={listItemStyles}>Seed Funding Financing <a href="https://twitter.com/v4ex/status/1397288204294758402">English</a> <a href="https://twitter.com/v4ex/status/1397288516699049989">中文</a></li>
          <li style={listItemStyles}>Common Stock Information</li>
        </ul>
      </div>
      
    </div>
  )
}


export default PageBodyComponent
