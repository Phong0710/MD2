var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inorder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    };
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode(data);
            var currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
console.log("The numbers of node ".concat(tree.totalNode));
tree.inorder(tree.root);
