export class Controller {
    constructor(viewModule, modelModule) {
        this.view = viewModule;
        this.model = modelModule;

        this.initRender(this.model.data);
        this.model.bindInitRender(this.initRender);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindFlipCheck(this.handleFlipCheck);
    }

    initRender = data => {
        this.view.render(data);
    }

    handleAddTodo = text => {
        this.model.addTodo(text);
    }

    handleDeleteTodo = id => {
        this.model.deleteTodo(id);
    }

    handleEditTodo = (id, text) => {
        this.model.editTodo(id, text);
    }

    handleFlipCheck = id => {
        this.model.flipCheck(id);
    }
}