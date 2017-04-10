import YAML from 'yamljs';
import path from 'path';
import { defaults } from 'lodash';

const env = process.env.NODE_ENV || 'local';
const defaultConfigPath = path.resolve(__dirname, `./config.yaml`);
const envConfigPath = path.resolve(__dirname, `./config.${env}.yaml`);
export default defaults(YAML.load(envConfigPath), YAML.load(defaultConfigPath));
