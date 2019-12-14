import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { apiURL } from "./configs/index";
import { history } from "./helpers/history";
import { store } from "./redux/rootReducer";
import { logout, refreshToken } from "./services/auth.service";

axios.defaults.baseURL = apiURL;

axios.interceptors.request.use(req => {
  const token = localStorage.getItem("token");
  if (token) req.headers["Authorization"] = token;
  return req;
});

let tries = 0;

axios.interceptors.response.use(
  response => {
    // Return a successful response back to the calling service
    return response;
  },
  error => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Logout user if token refresh didn't work or user is disabled
    if (
      error.config.url === error.config.baseURL + "/auth/refresh" ||
      error.response.message === "Account is disabled."
    ) {
      logout();

      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    tries++;
    if (tries === 2) {
      logout();
    }

    // Try request again with new token
    return refreshToken()
      .then(token => {
        // New request with new token

        const config = error.config;
        config.headers["Authorization"] = token;
        console.log("refreshed");
        return new Promise((resolve, reject) => {
          axios
            .request(config)
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
        });
      })
      .catch(error => {
        Promise.reject(error);
      });
  }
);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
