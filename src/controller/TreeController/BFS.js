import { startTraversal } from './DFS';

export const levelOrder = async (tree,callback,onTraversalFinish) => {
    let result = [];
    let queue = [];
    
    if(tree) {queue.push(tree)};

    while(queue.length > 0){
        let node = queue.shift();
        result.push(node);
        let children = node.children;
        console.log("BFS : ",children);
        if(children[0]){
            queue.push(children[0]);
        }
        if(children[1]){
            queue.push(children[1]);
        }
    }

    startTraversal(result,callback,onTraversalFinish);
}