import * as React from "react";
import { render } from "react-dom";
import { App } from "./app";
import { store } from "./modules/redux/redux-module";
import { Provider } from "react-redux";

export const root = document.querySelector("#house-calculator");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
