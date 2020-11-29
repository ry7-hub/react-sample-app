import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
// import tileData from "./tileData";
import UserCard from "./UserCard";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  title: {
    fontSize: "15px",
  },
});

const tileData = [
  {
    img: "../../../image/Bz_sample.jpg",
    title: "Image1",
    author: "author",
    id: "1",
  },
  {
    img: "../../../image/Bz_sample.jpg",
    title: "Image2",
    author: "author",
    id: "2",
  },
  {
    img: "../../../image/Bz_sample.jpg",
    title: "Image3",
    author: "author",
    id: "3",
  },
  {
    img: "../../../image/Bz_sample.jpg",
    title: "Image4",
    author: "author",
    id: "4",
  },
];

const cards = tileData.map((item) => <UserCard key={item.title}></UserCard>);

class UserGridList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
    return (
      <div className={classes.root}>
        <GridList cellHeight={220} cols={5} spacing={40}>
          {tileData.map((tile) => (
            <GridListTile key={tile.id}>
              {/* <UserCard></UserCard> */}
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  title: classes.title,
                }}
                // subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(UserGridList);
