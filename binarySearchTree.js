// global node function
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Binary search tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

 // create node and add node data to binary tree
  add(data) {
    const node = new Node(data);
    if(!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while(current) {
        if(node.data < current.data) {
          if(!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.data > current.data) {
          if(!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
  }

 // traverse BST and remove the node with provided data 
  remove(data) {
    const that = this;
    const removeNode = (node, data) => {
      if(!node) {
        return null;
      }
      if(data === node.data) {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          return node.right;
        }
        if(!node.right) {
          return node.left;
        }
        // 2 children
        const temp = that.getMin(node.right);
        node.data = temp;
        node.right = removeNode(node.right, temp);
        return node;
      } else if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  // search the provided data in BST
  contains(data) {
    let current = this.root;
    while(current) {
      if(data === current.data) {
        return true;
      }
      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // traverse the BST in preorder root>>left>>right
  _preOrder(node, fn) {
    if(node) {
      if(fn) {
        fn(node);
      }
      this._preOrder(node.left, fn);
      this._preOrder(node.right, fn);
    }
  }

  // traverse the BST in inorder left>>root>>right
  _inOrder(node, fn) {
    if(node) {
      this._inOrder(node.left, fn);
      if(fn) {
        fn(node);
      }
      this._inOrder(node.right, fn);
    }
  }

  // traverse the BST in inorder left>>right>>root
  _postOrder(node, fn) {
    if(node) {
      this._postOrder(node.left, fn);
      this._postOrder(node.right, fn);
      if(fn) {
        fn(node);
      }
    }
  }
