import {DomListener} from './DOMListener.js';

export class View extends DomListener {
    constructor(selector) {
        super();
        // root class app
        this.$root = this.get(selector);

        this.title = this.create('h2', 'Todo List');
        this.form = this.create('form');
        this.button = this.create('button', 'Submit');

        this.input = this.create('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add your things';

        this.list = this.create('ul');
        this.list.classList.add('todo-list');

        this.form.append(this.input, this.button);
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

                const span = this.create('span');
                span.contentEditable = true;
                span.classList.add('editable');

                if (el.status) {
                    const strike = this.create('s');
                    strike.textContent = el.text;
                    strike.textContent = el.date;
                    span.append(strike);
                } else {
                    span.textContent = el.text + ' ' + el.date;
                }

                const deleteBtn = this.create('button', 'Delete');
                deleteBtn.classList.add('delete')
                li.append(checkbox, span, deleteBtn);

                this.list.append(li);
                this.$root.append(this.title, this.form, this.list);
            });
        }
    }
}