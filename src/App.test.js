import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import axios from "axios";

it("renders without crashing", () => {
  shallow(<App />);
});
