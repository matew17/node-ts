import BodyParser from 'body-parser';
import Cors from 'cors';

import router from './routes/router';
import Server from './classes/server';

// Server implementation
const server = new Server();

// Body Parser
server.app.use(BodyParser.urlencoded({ extended: true }));
server.app.use(BodyParser.json());

server.app.use(Cors({ origin: true, credentials: true }));

// Server Routes
server.app.use('/', router);

// Start Server
server.start(() => {
    console.log(`Server running in port ${server.port}`);
});
