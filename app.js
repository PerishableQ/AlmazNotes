import {Model} from './src/Model.js';
import {View} from './src/View.js';
import {Controller} from './src/Controller.js';

const app = new Controller(new View('.app'), new Model());

// app.model.addTodo('first one', '31 May 2021');
// app.model.addTodo('second one', 'date');
// app.view.render(app.model.data);
console.log(app.model.data);