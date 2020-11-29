import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  username: {
    textAlign: "left",
  },
  description: {
    textAlign: "left",
    fontSize: 14,
  },
  button: {
    marginTop: theme.spacing(3),
    fontWeight: "bold",
  },
});

class ProfileDetail extends Component {
  render() {
    const { classes, name, description, onClickFunc } = this.props;

    return (
      <div>
        <Typography
          variant="h3"
          component="h2"
          className={classes.username}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          className={classes.description}
          color="textSecondary"
          gutterBottom
        >
          {(description + "").split("\n").map((line, key) => {
            return (
              <span key={key}>
                {line}
                <br />
              </span>
            );
          })}
        </Typography>
        <Button
          type="button"
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={onClickFunc}
        >
          編集
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileDetail);
