export class Model {
    constructor () {
        this.data = [
            {id: 1, text: 'todo', date: 'May 29, 2021', status: false},
            // {id: 2, text: 'todo', date: 'May 29, 2021', status: false}
        ];
    }

    addTodo(text, date) {
        const todo = {
            id: this.data.length === 0 ? 1 : this.data.length + 1,
            text: text, 
            date: date, 
            status: false
        }

        this.data.push(todo);
        this.initRender(this.data);
    }

    bindInitRender(callback) {
        this.initRender = callback;
    }
}