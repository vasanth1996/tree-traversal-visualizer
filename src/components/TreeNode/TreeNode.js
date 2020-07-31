import React, { Component } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// Styles
import "./treeNodeStyle.css";
import { Line } from "react-lineto";

export default class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      children: [],
      connectingLines: [],
      active: null,
    };
  }

  //Initializing state values with incoming props
  static getDerivedStateFromProps = (props) => {
    const { node, active } = props;
    if (!node) return null;
    return {
      id: node.id,
      name: node.name,
      children: node.children,
      active: active,
    };
  };

  componentDidMount() {
    this.updateToParent();
  }

  // Sending back to parent node for Line drawing between parent and child
  updateToParent = () => {
    const { node } = this.props;
    this.props.onChildRenderFinish(node);
  };

  // Render children Nodes
  renderChildren = () => {
    const { children, active } = this.state;
    return children.map((node) => (
      <TreeNode
        active={active}
        key={node.id}
        node={node}
        onChildRenderFinish={this.onChildRenderFinish}
      />
    ));
  };

  // Calls when child node gets mounted
  onChildRenderFinish = (child) => {
    if (!child || !child.id) return null;
    const { id, connectingLines } = this.state;

    let parentNode = document
      .getElementById(id)
      .getBoundingClientRect()
      .toJSON();
    let childNode = document
      .getElementById(child.id)
      .getBoundingClientRect()
      .toJSON();

    let padding = parentNode.width / 2;
    let coOrdinates = {
      x: parentNode.x + padding,
      y: parentNode.y + padding + 26,
      x1: childNode.x + padding,
      y1: childNode.y + padding - 26,
    };

    connectingLines.push(coOrdinates);
    this.setState({ connectingLines });
  };

  // Once all the child nodes mounted we need to draw lines between parent to child
  renderConnectingLines = () => {
    const { connectingLines } = this.state;
    return connectingLines.map((line) => (
      <Line
        key={`line_${line.x1}_${line.y1}`}
        x0={line.x}
        y0={line.y}
        x1={line.x1}
        y1={line.y1}
        borderColor={"#2196F3"}
      />
    ));
  };

  renderActiveArrow = () => {
    const { active, node,showActiveArrow } = this.props;
    if (showActiveArrow && active && node && active.id === node.id) {
      return (<div className="tree-node-arrow">
        <ArrowDownwardIcon htmlColor="#FE6B8B" />
      </div>);
    }
    return null;
  };

  getStatusClass = () => {
    const { active, node } = this.props;
    return active && node && active.id === node.id
      ? "tree-node-active"
      : "tree-node-inactive";
  };

  render() {
    const { node } = this.props;

    //If node is null return null
    if (!node) return null;

    // Rendering tree node
    return (
      <div className="tree-node-root">
        <div
          id={node.id}
          className={`tree-node-container ${this.getStatusClass()}`}
        >
          {node.name}
        </div>
        <div className="tree-node-children">{this.renderChildren()}</div>
        {this.renderConnectingLines()}
        {this.renderActiveArrow()}
      </div>
    );
  }
}

TreeNode.defaultProps = {
  active: false,
  node: null,
  onChildRenderFinish: () => {},
  showActiveArrow : true,
};
