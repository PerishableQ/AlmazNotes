import {Helper} from './Helper.js';

export class View extends Helper {
    constructor(selector) {
        super();
        // root class app
        this.$root = this.get(selector);
        this.title = this.create('h2', 'Todo List');

        this.form = this.create('form');
        this.submitBtn = this.create('button', 'Submit');

        this.input = this.create('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add your things';

        this.list = this.create('ul');
        this.list.classList.add('todo-list');

        this.form.append(this.input,  this.submitBtn);
        this.$root.append(this.title, this.form, this.list);

        this.editableText = '';
        this._initLocalListeners()
    }

    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    _initLocalListeners() {
        this.list.addEventListener('input', event => {
          if (event.target.className === 'editable') {
            this.editableText = event.target.innerText
          }
        });
      }

    bindAddTodo(eventHandlerFunction) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

            if (this._todoText) {
                eventHandlerFunction(this._todoText);
                this._resetInput();
            }
        })
    }

    bindDeleteTodo(eventHandlerFunction) {
        this.list.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = +event.target.parentElement.id;
                eventHandlerFunction(id);
            }
        });
    }

    bindEditTodo(eventHandlerFunction) {
        this.list.addEventListener('focusout', event => {
            if (this.editableText) {
                eventHandlerFunction(+event.target.parentElement.id, this.editableText);
                this.editableText = '';
            }
        })
    }

    bindFlipCheck(eventHandlerFunction) {
        this.list.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                eventHandlerFunction(+event.target.parentElement.id)
            }
        })
    }
    
    render(data) {
        while(this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }

        if (data.length === 0) {
            const p = this.create('p', 'There is no task yet. Add one?');
            this.list.append(p);
        } else {
            data.forEach(el => {
                const li = this.create('li');
                li.id = el.id;

                const checkbox = this.create('input');
                checkbox.type = 'checkbox';
                checkbox.checked = el.status;

                const span1 = this.create('span');
                span1.contentEditable = true;
                span1.classList.add('editable');

                const span2 = this.create('span');
                span2.contentEditable = false;

                if (el.status) {
                    const strike = this.create('s');
                    strike.textContent = el.text;
                    strike.textContent = el.date;
                    span1.append(strike);
                } else {
                    span1.textContent = el.text;
                    span2.textContent = el.date;
                }

                const deleteBtn = this.create('button', 'Delete');
                deleteBtn.classList.add('delete')
                li.append(checkbox, span1, span2, deleteBtn);

                this.list.append(li);
                this.$root.append(this.title, this.form, this.list);
            });
        }
    }
}