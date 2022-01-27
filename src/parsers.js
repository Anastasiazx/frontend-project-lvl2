import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__tests__/__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const chooseParsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parsedFile = (file, fileFormat) => {
  const parse = chooseParsers[fileFormat];
  return parse(file);
};

const getParsedData = (file) => {
  const data = readFile(file);
  const dataType = path.extname(file).substring(1);
  return parsedFile(data, dataType);
};

export default getParsedData;
