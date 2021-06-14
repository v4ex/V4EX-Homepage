import React from "react"
import { navigate } from "gatsby"

import { handleAuthentication } from "../utils/auth"



const CallbackPage = () => {
  handleAuthentication(() => {
    navigate(localStorage.getItem("navigateAfterAuth"))
  })

  return <p>Loading...</p>
}


export default CallbackPage
