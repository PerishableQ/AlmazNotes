import {getDate} from './utils.js';

export class Model {
    constructor () {
        this.data = JSON.parse(localStorage.getItem('data')) || [];
    }

    updateLocalStorage (data) {
        this.initRender(data);
        localStorage.setItem('data', JSON.stringify(data));
    }

    addTodo(text) {        
        const todo = {
            id: this.data.length === 0 ? 1 : this.data.length + 1,
            text: text, 
            date: getDate(), 
            status: false
        }

        this.data.push(todo);
        this.updateLocalStorage(this.data);
    }

    deleteTodo(id) {
        this.data = this.data.filter(dataEl => dataEl.id !== id);

        this.updateLocalStorage(this.data);
        this.initRender(this.data);
    }

    editTodo(id, text) {
        this.data.map(
            dataEl => dataEl.id === id ?
            {id: dataEl.id, text: text, date: dataEl.date, status: dataEl.status} :
            dataEl);
    }

    flipCheck(id) {
        this.data = this.data.map(
            dataEl => dataEl.id === id ?
            {id: dataEl.id, text: dataEl.text, date: dataEl.date, status: !dataEl.status} :
            dataEl);

        this.initRender(this.data);
    }

    bindInitRender(initRender) {
        this.initRender = initRender;
    }
}