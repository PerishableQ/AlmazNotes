export class Controller {
    constructor(viewModule, modelModule) {
        this.view = viewModule;
        this.model = modelModule;

        this.initRender(this.model.data);
        this.model.bindInitRender(this.initRender);
    }

    initRender = data => {
        this.view.render(data);
    }
}