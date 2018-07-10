import React from "react";
import axios from "axios";

import AccordionWrapper from "../../components/AccordionWrapper";

export default class Home extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(res => {
      return this.setState({
        beers: res.data
      });
    });
  }

  render() {
    const { beers } = this.state;

    return (
      <div style={{ marginTop: "30px" }}>
        <AccordionWrapper beers={beers} />
      </div>
    );
  }
}
