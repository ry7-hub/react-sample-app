import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
});

class ImagePane extends Component {
  constructor(props) {
    super(props);
    this.getImage();
  }

  componentDidUpdate(prevProps) {
    this.getImage();
  }

  getImage() {
    const { profile } = this.props;
    if (!profile.loadingImage && !profile.loadComplete) {
      this.props.getImage(this.props.auth.user);
    }
  }

  render() {
    const { classes, profile } = this.props;
    return (
      <Avatar
        alt="acount_image"
        src={profile.image.base64}
        className={classes.large}
      />
    );
  }
}

export default withStyles(styles)(ImagePane);
