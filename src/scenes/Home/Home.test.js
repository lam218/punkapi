import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import Home from "./Home";

describe("Home tests", () => {
  it("renders the home scene", () => {
    shallow(<Home axios />);
  });
});
