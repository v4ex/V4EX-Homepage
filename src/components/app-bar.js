import * as React from "react"

import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

import { login, logout, isAuthenticated, getProfile } from "../utils/auth"


// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButtone: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  personButton: {

  },
  title: {
    flexGrow: 1,
  },
}))


// Markup
const SignInOut = () => {
  const classes = useStyles();

  if (!isAuthenticated()) {
    return <Button color="inherit" onClick={() => {
      localStorage.setItem("navigateAfterAuth", window.location.pathname)
      login()
    }}>Sign in</Button>
  } else {
    const user = getProfile()

    return(
      <>
        <IconButton className={classes.personButton} color="inherit" aria-label="user">
          <PersonIcon />
          {user.name ? user.name : "user"}
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="exit" onClick={e => {
          logout()
        }}>
          <ExitToAppIcon />
        </IconButton>
      </>
    )
  }
}

const AppBarComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "#FFF" }}>
              <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home" href="/">
                <HomeIcon />
              </IconButton>
            </Link>
          </Typography>

          <SignInOut />
        </Toolbar>
      </AppBar>
  )
}


// Export
export default AppBarComponent
