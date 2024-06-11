import dotenv from 'dotenv';
import { server } from './app.js';  // Import the server instead of app

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
