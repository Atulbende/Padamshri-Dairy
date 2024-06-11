import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { CookiesOptions } from './config/cookiesConfig.js';
import http from 'http';
import setupSocketServer from './websockets/socketServer.js';

const app = express();

const corsOptions = {
    origin: [
        'http://127.0.0.1:3000',
        'http://localhost:3002',
        'http://localhost:3000',
        'https://padamshri-dairy-git-master-atul-s-projects-b035b0ba.vercel.app',
        'https://padamshri-dairy-p2896etdc-atul-s-projects-b035b0ba.vercel.app',
        'https://padamshri-dairy-obxrrsxxw-atul-s-projects-b035b0ba.vercel.app',
        'https://padamshri-dairy.vercel.app/login',
        'https://padamshri-dairy-o7m5mstb6-atul-s-projects-b035b0ba.vercel.app',
        'https://padamshri-dairy-git-master-atul-s-projects-b035b0ba.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'AppId'],
    credentials: true
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors(corsOptions));
app.use(cookieParser(CookiesOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Administration Routers
import userRouters from './routers/user.router.js';
import commonRouters from './routers/common.router.js';
import appKeywordRouters from './routers/app/keyword.router.js';
import appCustomer from './routers/app/customer.router.js';
import appDailyEntries from './routers/app/daily_entries.router.js';
import appDashboard from './routers/app/dashboard.router.js';

app.use('/api/v1/user', userRouters);
app.use('/api/v1/common', commonRouters);
// Application Routers
app.use('/api/v1/app', appDashboard);
app.use('/api/v1/app', appKeywordRouters);
app.use('/api/v1/app', appCustomer);
app.use('/api/v1/app', appDailyEntries);

// Create HTTP server
const server = http.createServer(app);

// Setup Socket.IO server
const io = setupSocketServer(server,corsOptions);

export { app, server };
