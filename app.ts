import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import CommonRoutes from './src/http/routes/common.routes';
import { TransactionsRoutes } from './src/http/routes/transactions.routes';
import { AuthRoutes } from './src/http/routes/auth.routes';
import debug from 'debug';
import dotenv from 'dotenv';
import mongoose, {ConnectOptions} from 'mongoose';

dotenv.config();
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutes> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());
app.use(express.static('build'))

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}
app.use(expressWinston.logger(loggerOptions));

routes.push(new TransactionsRoutes(app));
routes.push(new AuthRoutes(app));

const PORT = process.env.PORT || 6001;

const runningMessage = `Server running at http://localhost:${PORT}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage)
});



mongoose.connect(process.env.MONGO_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as ConnectOptions).then(() => {
  server.listen(PORT, () => {
    routes.forEach((route: CommonRoutes) => {
      debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);

  }
)}).catch((error) => console.log(`${error} did not connect`));


