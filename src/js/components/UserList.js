import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import UserCard from "./userlist/UserCard";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
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
    props.getUsers();
  }

  render() {
    const { classes, userlist } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={290} cols={6} spacing={5}>
          {userlist.users.map((user) => (
            <GridListTile key={user.name}>
              {/* <UserCard></UserCard> */}
              <img
                src={
                  user.image.length > 0
                    ? user.image[0].image
                    : "../../image/user.svg"
                }
                alt={user.screen_name}
              />
              <GridListTileBar
                title={user.screen_name}
                classes={{
                  title: classes.title,
                }}
                // subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${user.screen_name}`}
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
