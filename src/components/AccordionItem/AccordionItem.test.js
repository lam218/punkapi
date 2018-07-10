import React from "react";
import { shallow } from "enzyme";
import AccordionItem from "./AccordionItem";

describe("Item tests", () => {
  it("renders an item", () => {
    shallow(
      <AccordionItem
        beer={{ name: "test", tagline: "test", first_brewed: "test" }}
      />
    );
  }),
    it("renders an item", () => {
      const acc = shallow(
        <AccordionItem
          beer={{ name: "test", tagline: "test", first_brewed: "test" }}
        />
      );
      acc
        .find("div")
        .find("h3")
        .simulate("click");
    });
});
