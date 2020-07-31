import React, { Component } from "react";

// Styles
import "./treeStyle.css";

// Components
import TreeNode from "../../components/TreeNode/TreeNode";
import treeData from "../../controller/TreeController/TreeData";
import SelectBox from "../../components/SelectBox/SelectBox";
import TNode from "../../controller/TreeController/TreeNode";

// Controllers
import {
  inOrder,
  preOrder,
  postOrder,
} from "../../controller/TreeController/DFS";
import { levelOrder } from "../../controller/TreeController/BFS";

//Third party libraries
import { Grid, Button, Snackbar, Slide } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import CONST from "../../const/CONST";

const treeCONST = CONST.tree;

const traversalForType = {
  [treeCONST.DFS]: [treeCONST.INORDER, treeCONST.POSTORDER, treeCONST.PREORDER],
  [treeCONST.BFS]: [treeCONST.LEVELORDER],
};

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: treeData,
      type: null,
      traversal: null,
      active: null,
      activeList: [],
      isTraverseInProgress: false,
      isTraverseFinish: false,
    };
  }

  handleTypeChange = (type) => {
    this.setState({ type, traversal: null, active: null, activeList: [] });
  };

  handleTraversalChange = (traversal) => {
    this.setState({ traversal, active: null, activeList: [] });
  };

  renderType() {
    const { isTraverseInProgress } = this.state;
    return (
      <div className="tree-select-box">
        <SelectBox
          disabled={isTraverseInProgress}
          handleChange={this.handleTypeChange}
          placeholder="Type"
        >
          <option value={treeCONST.DFS}>DFS-Traversal</option>
          <option value={treeCONST.BFS}>BFS-Traversal</option>
        </SelectBox>
      </div>
    );
  }

  renderTraversal() {
    const { type, isTraverseInProgress } = this.state;

    const traversal = traversalForType[type];
    let options = null;

    if (traversal) {
      options = traversal.map((option) => (
        <option value={option}>{option}</option>
      ));
    }

    return (
      <div className="tree-select-box">
        <SelectBox
          disabled={isTraverseInProgress}
          handleChange={this.handleTraversalChange}
          placeholder="Traversal"
        >
          {options}
        </SelectBox>
      </div>
    );
  }

  renderOptions() {
    return (
      <Grid container>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={3}>
          {this.renderType()}
        </Grid>
        <Grid item xs={12} md={3}>
          {this.renderTraversal()}
        </Grid>
        <Grid className="button" item xs={12} md={1}>
          <div>{this.renderButtons()}</div>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    );
  }

  renderButtons() {
    const { type, traversal, isTraverseInProgress } = this.state;
    let disabled = true;
    if (type && traversal && !isTraverseInProgress) {
      disabled = false;
    }
    return (
      <Button
        onClick={this.startTraversal}
        disabled={disabled}
        variant="contained"
        color="primary"
      >
        Start
      </Button>
    );
  }

  renderActiveList() {
    const { activeList, traversal } = this.state;
    const list = activeList.map((node) => {
      let newNode = new TNode(`_${node.id}`, node.name);
      return (
        <TreeNode node={newNode} active={newNode} showActiveArrow={false} />
      );
    });

    if (list.length == 0) return null;

    return (
      <div className="tree-active-list">
        <p>{traversal} Traversal</p>
        <Grid container xs={12} direction="row" justify="center" wrap={true}>
          {list}
        </Grid>
      </div>
    );
  }

  startTraversal = () => {
    this.setState(
      {
        isTraverseInProgress: true,
        active: null,
        activeList: [],
      },
      () => {this._startTraversal()}
    );
  };

  _startTraversal = () => {
    const { tree, traversal } = this.state;
    switch (traversal) {
      case treeCONST.INORDER:
        inOrder(tree, this.setActive, this.onTraversalFinish);
        break;
      case treeCONST.PREORDER:
        preOrder(tree, this.setActive, this.onTraversalFinish);
        break;
      case treeCONST.POSTORDER:
        postOrder(tree, this.setActive, this.onTraversalFinish);
        break;
      case treeCONST.LEVELORDER:
        levelOrder(tree, this.setActive, this.onTraversalFinish);
        break;
    }
  };

  setActive = (active) => {
    const { activeList } = this.state;
    activeList.push(active);
    this.setState({ active, activeList },() => {
      this.scrollToBottom();
    });
  };

  onTraversalFinish = () => {
    this.setState(
      {
        isTraverseInProgress: false,
        isTraverseFinish: true,
      });
  };

  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  handleSnackBarClose = () => {
    this.setState({ isTraverseFinish: false });
  };

  // Snackbar animation
  TransitionRight(props) {
    return <Slide {...props} direction="left" />;
  }

  render() {
    const { tree, active, traversal, isTraverseFinish } = this.state;
    return (
      <div className="tree-container">
        <Grid container>
          {this.renderOptions()}
          <Grid item xs={12} md={12}>
            <TreeNode node={tree} active={active} />
          </Grid>
          {this.renderActiveList()}
        </Grid>
        <Snackbar
          open={isTraverseFinish}
          autoHideDuration={6000}
          TransitionComponent = {this.TransitionRight}
          anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
          onClose={this.handleSnackBarClose}
        >
          <MuiAlert elevation={6} variant="filled" severity="success">
            {traversal} Finished!
          </MuiAlert>
        </Snackbar>
      </div>
    );
  }
}
