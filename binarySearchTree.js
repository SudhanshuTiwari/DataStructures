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

	  //DFS traversal
	  
	  traverseDFS(fn, method) {
		const current = this.root;
		if(method) {
		  this[`_${method}`](current, fn);
		} else {
		  this._preOrder(current, fn);
		}
	  }

	  // BFS traversal
	  traverseBFS(fn) {
		this.queue = [];
		this.queue.push(this.root);
		while(this.queue.length) {
		  const node = this.queue.shift();
		  if(fn) {
			fn(node);
		  }
		  if(node.left) {
			this.queue.push(node.left);
		  }
		  if(node.right) {
			this.queue.push(node.right);
		  }
		}
	  }
	  
	  //traverse and print all the nodes of BST

	  print() {
		if(!this.root) {
		  return console.log('No root node found');
		}
		const newline = new Node('|');
		const queue = [this.root, newline];
		let string = '';
		while(queue.length) {
		  const node = queue.shift();
		  string += `${node.data.toString()} `;
		  if(node === newline && queue.length) {
			queue.push(newline);
		  }
		  if(node.left) {
			queue.push(node.left);
		  }
		  if(node.right) {
			queue.push(node.right);
		  }
		}
		console.log(string.slice(0, -2).trim());
	  }

	  // prints all node at same lavel as of provided node
	  printByLevel() {
		if(!this.root) {
		  return console.log('No root node found');
		}
		const newline = new Node('\n');
		const queue = [this.root, newline];
		let string = '';
		while(queue.length) {
		  const node = queue.shift();
		  string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
		  if(node === newline && queue.length) {
			queue.push(newline);
		  }
		  if(node.left) {
			queue.push(node.left);
		  }
		  if(node.right) {
			queue.push(node.right);
		  }
		}
		console.log(string.trim());
	  }

	  // get node with min value
	  getMin(node) {
		if(!node) {
		  node = this.root;
		}
		while(node.left) {
		  node = node.left;
		}
		return node.data;
	  }

	  // get node with max value
	  getMax(node) {
		if(!node) {
		  node = this.root;
		}
		while(node.right) {
		  node = node.right;
		}
		return node.data;
	  }
	  
	  // get max height of tree by traversing the BST
  _getHeight(node) {
    if(!node) {
      return -1;
    }
    const left = this._getHeight(node.left);
    const right = this._getHeight(node.right);
    return Math.max(left, right) + 1;
  }

  // get height of BST
  getHeight(node) {
    if(!node) {
      node = this.root;
    }
    return this._getHeight(node);
  }

  // checking if BST is bananced
  _isBalanced(node) {
    if(!node) {
      return true;
    }
    const heigthLeft = this._getHeight(node.left);
    const heigthRight = this._getHeight(node.right);
    const diff = Math.abs(heigthLeft - heigthRight);
    if(diff > 1) {
      return false;
    } else {
      return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
  }

  isBalanced(node) {
    if(!node) {
      node = this.root;
    }
    return this._isBalanced(node);
  }

  _checkHeight(node) {
    if(!node) {
      return 0;
    }
    const left = this._checkHeight(node.left);
    if(left === -1) {
      return -1;
    }
    const right = this._checkHeight(node.right);
    if(right === -1) {
      return -1;
    }
    const diff = Math.abs(left - right);
    if(diff > 1) {
      return -1;
    } else {
      return Math.max(left, right) + 1;
    }
  }

  // check if node is balanced 
  isBalancedOptimized(node) {
    if(!node) {
      node = this.root;
    }
    if(!node) {
      return true;
    }
    if(this._checkHeight(node) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
