import * as React from "react";
import { House } from "./modules/house/house-component";

export const App = () => {
  return (
    <React.Fragment>
      <h1>House-calculator</h1>
      <House />
    </React.Fragment>
  );
};
