import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AdressSearchField from "./AdressSearchField";
//doc https://material-ui.com/demos/app-bar/

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "block"
  },
  button: {
    margin: theme.spacing.unit
  }
});

const clickLogo = () => {
  window.open("http://www.otmenergi.se/");
};

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="title"
            color="inherit"
            noWrap
            onClick={clickLogo}
          >
            OTMEnergi
          </Typography>
          <div className={classes.grow} />
          <AdressSearchField
            searchPlaceHolder={props.searchPlaceHolder}
            map={props.map}
            updateCoordinates={props.updateCoordinates}
          />
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={props.clearMap}
          >
            Rensa kartan
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
