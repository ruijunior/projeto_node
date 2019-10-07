import express from 'express'; // sucrase - permite usar import
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Permite receber as requisições no formato json
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server; // sucrase, permite usar export dessa forma
