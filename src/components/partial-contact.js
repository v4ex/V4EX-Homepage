import * as React from "react"

// Styles
const partialContactStyles = {
  textAlign: "center",
}

const unorderedListStyles = {
  display: "inline-block",
}

// Markup
const PartialContactComponent = () => {
  return (
    <div style={partialContactStyles}>
      <p>Email: <a href="mailto:inc@v4ex.com">inc@v4ex.com</a></p>
      <ul style={unorderedListStyles}>
        <li>US: +1 6464 81 1986</li>
        <li>HK: +852 8175 0214</li>
        <li>CN: +86 13828 433 453</li>
        <li>EU: +48 123 61 5577</li>
        <li>PH: +63 96699 72000</li>
      </ul>
    </div>
  )
}

export default PartialContactComponent
