import { Server } from 'socket.io';
import  executeQuery  from '../database/query.js';
import { formatDate } from '../utils/index.js';

const setupSocketServer = (server, corsOptions) => {
    console.log('corsOptions:',corsOptions)
    const io = new Server(server, {
        path: '/dashboard/socket.io', // Set a custom path for the dashboard socket
        cors:  {
            origin: [
                'http://127.0.0.1:3000',
                'http://localhost:3002',
                'http://localhost:3000',
                'https://padamshri-dairy-git-master-atul-s-projects-b035b0ba.vercel.app',
                'https://padamshri-dairy-p2896etdc-atul-s-projects-b035b0ba.vercel.app',
                'https://padamshri-dairy-obxrrsxxw-atul-s-projects-b035b0ba.vercel.app',
                'https://padamshri-dairy.vercel.app/login',
                'https://padamshri-dairy-o7m5mstb6-atul-s-projects-b035b0ba.vercel.app'
                
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }
    });

    let interval;

    io.on('connection', async (socket) => {
        console.log('WebSocket connection opened');

        // Emit data every 1 second when a client connects
        interval = setInterval(async () => {
            try {
                // const fromDate = formatDate(req.body?.fromDate);
                // const toDate = formatDate(req.body?.toDate);
                const result = await executeQuery('call SP_Dashboard(?,?) ', [ '2024-06-11', '2024-06-11']);
                socket.emit('message', result); // Emit data to connected client
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 3000);

        socket.on('disconnect', () => {
            console.log('WebSocket connection closed');
            clearInterval(interval); // Clear interval when client disconnects
        });
    });

    return io;
};

export default setupSocketServer;
