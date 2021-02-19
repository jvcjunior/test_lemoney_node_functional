
require('module-alias/register')
import express, { Express } from 'express'
//@ts-ignore
import cors from 'cors';
//@ts-ignore
import morgan from 'morgan';
import routes from './routes';
import errorMiddleware from './common/middleware/error.middleware'
import { rateLimiter } from './common/middleware/ratelimit.middleware'
import config from './config/config';

// UncaughtException and UnhandledRejection handlers
import './common/utils/errorHandlerGlobal.utils'
// Database connection
import './database/connection';


// Create a new express application instance
const { name, version } = config;
const app: Express = express();

app.locals.name = name;
app.locals.version = version;

  // Call midlewares
app.use(cors())
app.use('/api/', rateLimiter)
app.use(express.json())
app.use(morgan('[:date[clf]] :method :url status::status length::res[content-length] - :response-time ms'));
//Set all routes from routes folder
app.use(routes)
app.use(errorMiddleware)

export default app;