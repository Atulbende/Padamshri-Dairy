import { io } from 'socket.io-client';

// Replace with your server URL
const SOCKET_URL = 'http://localhost:8000'; 

const socket = io(SOCKET_URL, {
  path: '/dashboard/socket.io', // Ensure this matches the server path
  withCredentials: true,
});

export default socket;
