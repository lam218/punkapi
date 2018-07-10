import React from "react";
import { shallow } from "enzyme";
import AccordionWrapper from "./AccordionWrapper";

describe("Wrapper tests", () => {
  it("renders a wrapper", () => {
    shallow(<AccordionWrapper beers={[]} />);
  }),
    it("clicks on a wrapper", () => {
      const acc = shallow(<AccordionWrapper beers={[]} />);
      acc
        .find("div")
        .find("button")
        .simulate("click");
    });
});
