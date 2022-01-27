import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readFilepath = (file) => fs.readFileSync(path.resolve(process.cwd(), './__tests__/__fixtures__', file), 'utf-8');

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
  const data = readFilepath(file);
  const dataType = path.extname(file).substring(1);
  return parsedFile(data, dataType);
};

export default getParsedData;
