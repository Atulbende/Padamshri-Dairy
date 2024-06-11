import { io } from 'socket.io-client';

// Replace with your server URL
const SOCKET_URL = 'https://padamshri-dairy.onrender.com'; 

const socket = io(SOCKET_URL, {
  path: '/dashboard/socket.io', // Ensure this matches the server path
  withCredentials: true,
});

export default socket;
