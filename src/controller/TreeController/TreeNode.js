/**
 * Definition for binary tree node
 * @param {node value} name 
 * @param {left node} left 
 * @param {right node} right 
 */
export default function TreeNode(id,name) {
  this.id = id;
  this.name = name === undefined ? 0 : name;
  this.children = [];
}
