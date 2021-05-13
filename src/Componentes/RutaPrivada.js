import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

export const RutaPrivada = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('loged')) {
          return <Component {...props} />;
        } else {console.log(Auth.isAuthenticated)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
