import {Model} from './src/Model.js';
import {View} from './src/View.js';
import {Controller} from './src/Controller.js';

const app = new Controller(new View('.app'), new Model());
app.initRender(new Model().data);