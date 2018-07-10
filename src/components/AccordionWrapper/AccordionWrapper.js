import React, { PureComponent } from "react";
import AccordionItem from "../AccordionItem";

export default class AccordionWrapper extends PureComponent {
  state = {
    closeAll: false
  };
  closeAll = () => {
    const { closeAll } = this.state;
    this.setState({
      closeAll: !closeAll
    });
  };
  render() {
    const { beers } = this.props;
    const { closeAll } = this.state;
    return (
      <div className="accordion-wrapper">
        <button onClick={this.closeAll}>Close All</button>
        {beers.map(beer => (
          <AccordionItem key={Math.random()} beer={beer} closeAll={closeAll} />
        ))}
      </div>
    );
  }
}
