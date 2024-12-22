class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return !this.items.length;
    }

    getSize(): number {
        return this.items.length;
    }

    clear(): void {
        this.items.length = 0;
    }
}

const stack1 = new Stack<number>()
const stack2 = new Stack<number>()
const stack3 = new Stack<number>()

stack1.push(3)
stack1.push(2)
stack1.push(1)

stack2.push(stack1.pop()!)
stack3.push(stack1.pop()!)
stack3.push(stack2.pop()!)
stack2.push(stack1.pop()!)
stack1.push(stack3.pop()!)
stack2.push(stack3.pop()!)
stack2.push(stack1.pop()!)

console.log(stack2.pop())
console.log(stack2.pop())
console.log(stack2.pop())
