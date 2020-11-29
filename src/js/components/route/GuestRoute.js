import React from "react";
import { Route, Redirect } from "react-router-dom";

export const GuestRoute = (props) =>
  localStorage.getItem("token") ? <Redirect to="/" /> : <Route {...props} />;
