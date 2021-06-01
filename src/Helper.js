export class Helper {
    create(selector, text) {
        const $el = document.createElement(selector);
        if (text) $el.innerHTML = text;
        
        return $el;
    }

    get($el) {
        return document.querySelector($el);
    }

    onAddTodo() {
        this.form = this.create('form');
        this.submitBtn = this.create('button', 'Submit');

        this.input = this.create('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add your things';
    }
}