const delayCall = (node,callback) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback(node);
            resolve();
        },1500);
    })
}

export const startTraversal = async (result,callback,onTraversalFinish) => {
    let isFirst = true;
    for(let res of result){
        if(isFirst){
            callback(res);
            isFirst = false;
            continue;
        }
        await delayCall(res,callback);
    }
    onTraversalFinish();
}

// InOrder Traversal
export const inOrder = async (tree,callback,onTraversalFinish) => {
    let result = [];
    inOrderHelper(tree,result);
    startTraversal(result,callback,onTraversalFinish);
}

const inOrderHelper = (node,result) => {
    if(!node) return;
    let children = node.children;
    inOrderHelper(children[0],result);
    result.push(node);
    inOrderHelper(children[1],result);
}

// PreOrder 
export const preOrder = async (tree,callback,onTraversalFinish) => {
    let result = [];
    preOrderHelper(tree,result);
    startTraversal(result,callback,onTraversalFinish);
}

const preOrderHelper = (node,result) => {
    if(!node) return;
    let children = node.children;
    result.push(node);
    preOrderHelper(children[0],result);
    preOrderHelper(children[1],result);
}

// PostOrder
export const postOrder = async (tree,callback,onTraversalFinish) => {
    let result = [];
    postOrderHelper(tree,result);
    startTraversal(result,callback,onTraversalFinish);
}

const postOrderHelper = (node,result) => {
    if(!node) return;
    let children = node.children;
    postOrderHelper(children[0],result);
    postOrderHelper(children[1],result);
    result.push(node);
}