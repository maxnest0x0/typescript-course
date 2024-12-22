import { Priority, Status, User } from './types';

const user: User = {
    name: '',
    status: Status.ACTIVE,
    todos: [],

    changeStatus(newStatus: Status): void {
        this.status = newStatus;
        console.log(`User status changed to ${newStatus}`);
    },

    addTodo(todo: string, priority: Priority = Priority.MEDIUM): void {
        this.todos.push({ todo, priority });
        console.log(`Todo added: ${todo} (Priority: ${priority})`);
    },

    displayTodos(): void {
        console.log(`Todos for ${this.name}:`);
        this.todos.forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
    },

    displayActiveTodos(): void {
        console.log(`Active Todos for ${this.name}:`);
        this.todos
            .filter(todo => todo.priority !== Priority.HIGH)
            .forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
    }
};

user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);
