import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components";
require("./CustomHeading.scss");

const CustomHeadingEditConfig = {
  emptyLabel: "Custom Heading",
  isEmpty: function (props) {
    return !props.heading || props.heading.trim().length < 1;
  },
};

export default class CustomHeading extends Component {
  render() {
    let headingElement = this.props.headingType
      ? React.createElement(
          this.props.headingType,
          { className: this.props.headingColor },
          this.props.heading
        )
      : "";
    return (
      <div className="heading">
        <p>
          This is a sample example of taking props through AEM. Other components
          can go here
        </p>
        {headingElement}
      </div>
    );
  }
}
MapTo("ui.frontend/components/content/custom-heading")(
  CustomHeading,
  CustomHeadingEditConfig
);
