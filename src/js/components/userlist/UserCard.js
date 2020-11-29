import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

const styles = (theme) => ({
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  root: {
    width: "80%",
    height: "80%",
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  media: {
    height: 150,
  },
});

class UserCard extends Component {
  constructor(props) {
    super(props);
    // this.getImage();
  }

  componentDidUpdate(prevProps) {
    // this.getImage();
  }

  getImage() {
    // const { profile } = this.props;
    // if (!profile.loadingImage && !profile.loadComplete) {
    //   this.props.getImage(this.props.auth.user);
    // }
  }

  render() {
    const { classes, profile } = this.props;
    console.log("aaaaaaa");
    console.log(this.props);

    return (
      <div className={classes.outer}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../../image/Bz_sample.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(UserCard);
