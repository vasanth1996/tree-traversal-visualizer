
import TreeNode from './TreeNode';

// Sample Tree Structure
const tree = {
    name : 'A',
    children : [
        {
            name : 'B',
            children : [
                {
                    name : 'C',
                    children : []
                },
                {
                    name : 'D',
                    children : []
                }
            ]
        },
        {
            name : 'E',
            children : [
                {
                    name : 'F',
                    children : []
                },
                {
                    name : 'G',
                    children : []
                }
            ]
        }
    ]
}

const initTreeData = () => {
    let root = null;
    if(!tree) return root;
    
    return helper(tree,0,0,'');
}

const helper = (node,level,index,parent) => {
    let id = `node_${level}_${index}_${parent}`;
    let newNode = new TreeNode(id,node.name);
    let children = node.children;
    for(let i=0;i<children.length;i++){
        let child = helper(children[i],level+1,i,node.name);
        newNode.children.push(child);
    }
    return newNode;
}

export default initTreeData();