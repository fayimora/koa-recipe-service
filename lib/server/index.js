import './configuration';
import app from './app';
import config from './config';

const APP_PORT = config.server.port || 3000;
const server = app().listen(APP_PORT, () => {
  console.log(`Server started on ${APP_PORT}`);
});

export default { app, server };
