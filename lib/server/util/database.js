import mongoose from 'mongoose';
import Promise from 'bluebird';
import { mongo } from '../config';

mongoose.connect(`${mongo.DB_URL}/${mongo.DB_NAME}`);
mongoose.connection.on('error', console.error.bind(console));
// mongoose.set('debug', true);
mongoose.Promise = Promise;

export default mongoose.connection;
