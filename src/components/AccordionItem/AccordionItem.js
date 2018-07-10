import React, { Component } from "react";

export default class AccordionItem extends Component {
  state = {
    active: false
  };
  componentWillReceiveProps() {
    const { closeAll } = this.props;
    if (closeAll) {
      this.setState({
        active: false
      });
    }
  }
  toggleClass = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { beer } = this.props;
    const { active } = this.state;
    return (
      <div>
        <h3
          onClick={this.toggleClass}
          className={active ? `${"active"} accordion-title` : "accordion-title"}
        >
          {beer.name}
        </h3>
        {active && (
          <div className="accordion-panel">
            <img src={beer.image_url} height="100px" />
            <p className={"accordion-para"}>Tagline: {beer.tagline}</p>
            <p>Date First Brewed: {beer.first_brewed}</p>
          </div>
        )}
      </div>
    );
  }
}
