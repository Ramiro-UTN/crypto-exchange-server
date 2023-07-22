import CommonRoutes from "./common.routes";
import { Application } from "express";
import loginAction from "../actions/auth/login.action"

export class AuthRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'AuthRoutes')
  }
  setUpRoutes(): Application {
    this.app.post('/auth/login', loginAction.run);

    return this.app;
  }
}

