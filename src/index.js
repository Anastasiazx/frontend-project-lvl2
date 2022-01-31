import fs from 'fs';
import path from 'path';
import calcDiff from './diff.js';
import chooseFormatters from './formatters/index.js';
import parse from './parsers.js';

const readFilepath = (file) => fs.readFileSync(path.resolve(process.cwd(), './__tests__/__fixtures__', file), 'utf-8');

const getParsedData = (file) => {
  const data = readFilepath(file);
  const dataType = path.extname(file).substring(1);
  return parse(data, dataType);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getParsedData(filepath1);
  const data2 = getParsedData(filepath2);
  const tree = calcDiff(data1, data2);
  return chooseFormatters(tree, format);
};

export default genDiff;
