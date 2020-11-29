import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const styles = (theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  imageForm: {
    // TODO
    display: "none !important",
  },
});

class BadgeAvatars extends Component {
  constructor(props) {
    super(props);
    this.getImage();
    this.selectImage = this.selectImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
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

  selectImage() {
    document.getElementById("uploadImage").click();
  }

  onChange(file) {
    const fileReader = new FileReader();
    fileReader.onload = this.uploadImage;
    fileReader.readAsDataURL(file);
  }

  uploadImage(e) {
    const base64 = e.target.result;
    const imageData = {
      id: this.props.auth.user.id,
      image: base64,
    };
    this.props.uploadImage(imageData);
  }

  render() {
    const { classes, profile } = this.props;
    return (
      <div className={classes.root}>
        {/* <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src={profile.image.base64} />
        </StyledBadge> */}
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <Avatar onClick={this.selectImage}>
              <AddAPhotoIcon />
            </Avatar>
            // <SmallAvatar alt="Remy Sharp" src={profile.image.base64} className={classes.small} />
          }
        >
          <Avatar
            alt="Travis Howard"
            src={profile.image.base64}
            className={classes.large}
          />
        </Badge>
        <input
          type="file"
          id="uploadImage"
          accept=".jpg,.gif,.png,image/gif,image/jpeg,image/png"
          onChange={(e) => this.onChange(e.target.files[0])}
          className={classes.imageForm}
        />
      </div>
    );
  }
}

export default withStyles(styles)(BadgeAvatars);
