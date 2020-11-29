import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/route/PrivateRoute";
import { GuestRoute } from "./components/route/GuestRoute";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./materialui/theme";

import configureStore from "./store";
import rootSaga from "./sagas";

import Login from "./containers/Login";
import Layout from "./containers/Layout";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const app = document.getElementById("app");
const store = configureStore();
store.runSaga(rootSaga, { history });

// ReactDOM.render(
//   <Router history={history}>
//     <Provider store={store}>
//       <Route path="/" component={Layout} />
//     </Provider>
//   </Router>,
//   app
// );

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <PrivateRoute path="/" component={Layout} />
        </Switch>
      </MuiThemeProvider>
    </Provider>
  </Router>,
  app
);
