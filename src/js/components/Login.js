import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "./Header";

const styles = (theme) => ({
  layout: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  alert: {
    color: "red",
    fontSize: 14,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target;
    const { history } = this.props;
    const data = {
      formData: {
        // name: "テスト",
        // password: "password",
        name: username.value.trim(),
        password: password.value.trim(),
      },
      history,
    };
    this.props.login(data);
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header menu="ログイン" />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="h5" component="span">
              ログイン
            </Typography>
            {this.props.auth.error ? (
              <p className={classes.alert}>
                ユーザ名またはパスワードが正しくありません。
              </p>
            ) : (
              ""
            )}
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">ユーザー名</InputLabel>
                <Input id="email" name="username" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">パスワード</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                ログイン
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Login);
