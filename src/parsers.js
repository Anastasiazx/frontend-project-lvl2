import yaml from 'js-yaml';
import path from 'path';
import readFile from './read_file.js';

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
