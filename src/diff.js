import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';

const genDiff = (object1, object2) => {
  const data1 = readFileSync(path.resolve('./files', `${object1}`));
  const data2 = readFileSync(path.resolve('./files', `${object2}`));
  const file1 = JSON.parse(data1);
  const file2 = JSON.parse(data2);
  const keysObject1 = Object.keys(file1);
  const keysObject2 = Object.keys(file2);
  const keysObjects = _.union(keysObject1, keysObject2).sort();

  const keys = keysObjects.map((key) => {
    if (!_.has(file1, key)) {
      return `  + ${key}: ${file2[key]}`;
    } if (!_.has(file2, key)) {
      return `  - ${key}: ${file1[key]}`;
    } if (file1[key] !== file2[key]) {
      return `  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
    }
    return `    ${key}: ${file1[key]}`;
  });
  return `{\n${keys.join('\n')} \n}`;
};

export default genDiff;
