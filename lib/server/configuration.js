import Promise from "bluebird";
import "./util/database";

Promise.config({ longStackTraces: true });
global.Promise = Promise;
