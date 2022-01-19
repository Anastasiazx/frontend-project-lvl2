import _ from 'lodash';
import getParsedData from './parsers.js';

const genDiff = (object1, object2) => {
  const file1 = getParsedData(object1);
  const file2 = getParsedData(object2);
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
  return `{\n${keys.join('\n')}\n}`;
};

export default genDiff;
