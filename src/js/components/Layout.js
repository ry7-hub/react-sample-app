import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";

import Dashboard from "../containers/Dashboard";
import Profile from "../containers/profile";
import AddUser from "../containers/AddUser";
import UserList from "../containers/UserList";

import { PrivateRoute } from "../components/route/PrivateRoute";

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    width: "50%",
    margin: "0 auto",
    minWidth: 300,
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
});

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.loginCheck();
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
  }

  logout() {
    this.props.logout();
    this.props.history.push("/login");
  }

  home() {
    this.props.history.push("/");
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Header
          menu="ログアウト"
          onClick={this.logout}
          onClickHome={this.home}
        />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/adduser" component={AddUser} />
          <PrivateRoute path="/userlist" component={UserList} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
