// Import
import addToMailchimp from "gatsby-plugin-mailchimp"
import Alert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { styled } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"
import React from "react"


// Styles
const rootStyles = {
  textAlign: "center",
}

const formStyles = {
  display: "flex",
  justifyContent: "center",
}

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  padding: "0 30px",
  marginLeft: "1em",
})

const resultStyles = {
  display: "flex",
  justifyContent: "center",
}


// Markup
export default class PartialNewsletterComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      result: null,
    }
  }

  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ result: result })
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    if (!!this.state.result) {
      return (
        <div style={rootStyles}>
          <h3>Subscribe to V4EX Inc. Newsletter</h3>
          <div style={resultStyles}>
            <Alert severity={this.state.result.result}>{this.state.result.msg}</Alert>
          </div>
        </div>
      )
    }

    return (
      <div style={rootStyles}>
        <h3>Subscribe to V4EX Inc. Newsletter</h3>
        <form style={formStyles} onSubmit={this._handleSubmit}>
          <TextField
            style={{
              width: "25em",
            }}
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            size="small"
            onChange={this.handleChange}
          />
          <br />
          <MyButton
            variant="contained"
            size="small"
            color="primary"
            label="Submit"
            type="submit"
          >
            <Typography variant="button">Subscribe</Typography>
          </MyButton>
        </form>
      </div>
    )
  }

}
