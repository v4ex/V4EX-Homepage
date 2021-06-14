import React from "react"
import { handleAuthentication } from "../utils/auth"


const CallbackPage = () => {
  handleAuthentication()

  return <p>Loading...</p>
}


export default CallbackPage
