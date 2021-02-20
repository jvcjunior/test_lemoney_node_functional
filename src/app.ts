
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
var whitelist = ['http://localhost:8000', 'http://localhost:8080']; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
app.use(cors(corsOptions))
// app.use(cors({
//   origin: function() {
//     // let origin;
//     // if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'){
//     //   origin = 'https://dev-smart-school.netlify.app'
//     // }else {
//     //   origin = 'http://localhost:5000'
//     // }
//     // return origin;
//     return 
//   },
//   credentials: true,
// }));
app.use('/api/', rateLimiter)
app.use(express.json())
app.use(morgan('[:date[clf]] :method :url status::status length::res[content-length] - :response-time ms'));
//Set all routes from routes folder
app.use(routes)
app.use(errorMiddleware)

export default app;