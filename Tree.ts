class Tree_Node {
    public data: any;
    public left: null | any;
    public right: null | any;
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class Operate_Tree {
    private head = new Tree_Node(1, null, null);
    public appendRight(value: any): void {
        let { ...head } = this.head;
        while (head.right) {
            head = head.right;
        };
        head.right = new Tree_Node(value, null, null);
        this.head = head;
    }
    public appendLeft(value: any): void {
        let { ...head } = this.head;
        while (head.left) {
            head = head.left;
        }
        head.left = new Tree_Node(value, null, null);
        this.head = head;
    }
}
