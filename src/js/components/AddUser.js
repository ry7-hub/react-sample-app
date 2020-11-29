import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { addUser, openDialog } = this.props;
    if (addUser.saveComplete) {
      openDialog();
    }
  }

  componentWillUnmount() {
    this.props.allClear();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
    const { username, password, screen_name, description } = e.target;
    const data = {
      formData: {
        name: username.value.trim(),
        password: password.value.trim(),
        screen_name: screen_name.value.trim(),
        description: description.value.trim(),
      },
    };
    this.props.registUser(data);
  }

  handleClose() {
    this.props.closeDialog();
    this.props.history.push("/");
  }

  render() {
    const { classes, addUser } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">
                      ユーザ名（ログインID）
                    </InputLabel>
                    <Input id="username" name="username" autoFocus />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">パスワード</InputLabel>
                    <Input id="password" name="password" />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="screen_name">表示名</InputLabel>
                    <Input id="screen_name" name="screen_name" />
                  </FormControl>
                  <FormControl margin="normal" fullWidth>
                    <TextField
                      id="description"
                      name="description"
                      label="プロフィール"
                      placeholder=""
                      multiline
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    登録
                  </Button>
                </form>
              </div>
            </Paper>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Backdrop className={classes.backdrop} open={addUser.dialogOpen}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Dialog
          open={addUser.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Info"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              登録が完了しました。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddUser);
