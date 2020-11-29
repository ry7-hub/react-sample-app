import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) =>
  localStorage.getItem("token") ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem("token") ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );
