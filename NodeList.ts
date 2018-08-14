class Node_List {
    public next: Node_List | null;
    public element: any;
    constructor(element: any) {
        this.element = element;
    }
}

class Operate_List {
    private head = new Node_List("head");
    public append(element): void {
        let { ...head_ } = this.head;
        while (head_.next) {
            head_ = head_.next;
        }
        head_.next = new Node_List(element);
        this.head = head_;
    }
    public pop(): void {
        let { ...head } = this.head;
        while (head.next !== null && head.next.next != null) {
            head = head.next;
        };
        head.next = null;
        this.head = head;
    }
}