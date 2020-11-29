import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  button: {
    marginTop: theme.spacing(3),
    fontWeight: "bold",
  },
});

class ProfileEdit extends Component {
  render() {
    const { classes, name, description, onSubmitFunc } = this.props;

    return (
      <div>
        <form onSubmit={onSubmitFunc}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">名前</InputLabel>
            <Input id="email" name="username" defaultValue={name} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              id="description"
              name="description"
              label="プロフィール"
              placeholder=""
              defaultValue={description}
              multiline
            />
          </FormControl>
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            保存
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileEdit);
