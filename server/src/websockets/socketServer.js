import { Server } from 'socket.io';
import  executeQuery  from '../database/query.js';
import { formatDate } from '../utils/index.js';

const setupSocketServer = (server, corsOptions) => {
    const io = new Server(server, {
        path: '/dashboard/socket.io', // Set a custom path for the dashboard socket
        cors: corsOptions
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
