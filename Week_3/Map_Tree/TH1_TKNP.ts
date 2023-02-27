class TreeNode<E> {
    public data: E;
    public left: TreeNode<E> | null;
    public right: TreeNode<E> | null;

    constructor(data: E) {
        this.data = data;
    }
}

interface Tree<E> {
    insert(data: E): TreeNode<E>;

    inorder(node: TreeNode<E>): void

    getSize(): number;
}

class BinaryTree<E> implements Tree<E> {
    root: TreeNode<E> | null;
    totalNode: number;


    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode;
    }

    inorder(node: TreeNode<E>): void {
        if(node){
            console.log(node.data)
            if(node.left){
                this.inorder(node.left)
            }
            if(node.right){
                this.inorder(node.right)
            }
        }
    }

    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode<E>(data);
            let currentNode = this.root;
            while (currentNode){
                if(data<currentNode.data){
                    if (!currentNode.left){
                        currentNode.left=node;
                        break;
                    }
                    currentNode=currentNode.left;
                } else if(data>currentNode.data){
                    if (!currentNode.right){
                        currentNode.right=node;
                        break
                    }
                    currentNode=currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }
}
let tree = new BinaryTree<number>();
tree.insert(6)
tree.insert(5)
tree.insert(7)
tree.insert(3)
tree.insert(4)
console.log(`The numbers of node ${tree.totalNode}`)
tree.inorder(tree.root)