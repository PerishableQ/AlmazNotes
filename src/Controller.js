export class Controller {
    constructor(viewModule, modelModule) {
        this.view = viewModule;
        this.model = modelModule;

        this.initController(this.model.data);
    }

    initController(data) {
        this.view.render(data);
    }
}