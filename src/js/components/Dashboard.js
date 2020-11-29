import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.spacing(5),
      width: theme.spacing(30),
      height: theme.spacing(30),
      cursor: "pointer",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
  avatar: {
    margin: theme.spacing(),
    width: "150px",
    height: "150px",
    backgroundColor: theme.palette.secondary.main,
  },
});

class Dashboard extends Component {
  profile() {
    this.props.history.push("/profile");
  }

  addUser() {
    this.props.history.push("/adduser");
  }

  userList() {
    this.props.history.push("/userlist");
  }

  render() {
    const { classes } = this.props;
    return (
      <main>
        <CssBaseline />
        <div className={classes.root}>
          <Paper elevation={20} onClick={this.profile.bind(this)}>
            <Avatar className={classes.avatar}>
              <PersonIcon style={{ fontSize: 120 }} />
            </Avatar>
          </Paper>
          <Paper elevation={20} onClick={this.userList.bind(this)}>
            <Avatar className={classes.avatar}>
              <AssignmentIndIcon style={{ fontSize: 120 }} />
            </Avatar>
          </Paper>
          <Paper elevation={20} onClick={this.addUser.bind(this)}>
            <Avatar className={classes.avatar}>
              <PersonAddIcon style={{ fontSize: 120 }} />
            </Avatar>
          </Paper>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Dashboard);
