import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UserCard from "../components/userlist/UserCard";
import UserGridList from "../components/userlist/UserGridList";
import BadgeAvatars from "../containers/profile/BadgeAvatars";
import ProfileDetail from "./profile/ProfileDetail";
import ProfileEdit from "./profile/ProfileEdit";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imagePaper: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
});

class Profile extends Component {
  constructor(props) {
    super(props);
    // this.getProfile();
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   this.getProfile();
  // }

  // componentWillUnmount() {
  //   this.props.editFinishedProfile();
  // }

  // getProfile() {
  //   const { profile } = this.props;
  //   if (!profile.gettingProfile && !profile.gottenProfile) {
  //     this.props.getProfile(this.props.auth.user);
  //   }
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const { username, description } = e.target;
  //   const data = {
  //     id: this.props.auth.user.id,
  //     formData: {
  //       screen_name: username.value.trim(),
  //       description: description.value.trim(),
  //     },
  //   };
  //   this.props.saveProfile(data);
  //   this.getProfile();
  // }

  render() {
    const { classes, profile } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.imagePaper}>
            <UserGridList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
