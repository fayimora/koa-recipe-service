import http from 'http';
import { agent as testAgent } from 'supertest-as-promised';

import { app } from '../../lib/server';

export default function agent () {
  return testAgent(http.createServer(app().callback()));
}
