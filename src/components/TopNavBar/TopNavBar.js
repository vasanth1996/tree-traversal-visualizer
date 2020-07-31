import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { AccountTree } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
    },
  },
  padding : {
    width:1,
    height:64
  }
}));

export function TopNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <AccountTree />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Tree Traversal Visualizer
          </Typography>

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <div className = {classes.padding}></div>
    </div>
  );
}

export default TopNavBar;
