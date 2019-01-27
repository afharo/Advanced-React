require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

// TODO: Create middleware to handle cookies (JWT)
// TODO: Create middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  (deets) => {
    // eslint-disable-next-line no-console
    console.log(`Server now running at http://localhost:${deets.port}`);
  },
);
