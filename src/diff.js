import { readFileSync } from 'fs';
import _ from 'lodash';

const data1 = readFileSync('./files/file1.json')
const data2 = readFileSync('./files/file2.json')

const genDiff = (object1, object2) => {
  const result = [];
  const file1 = JSON.parse(data1);
  const file2 = JSON.parse(data2);
  const keysObject1 = Object.keys(file1);
  const keysObject2 = Object.keys(file2);
  const keysObjects = _.union(keysObject1, keysObject2).sort();

  for (const key of keysObjects) {
    if (!_.has(file1, key)) {
      result.push(`  + ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      result.push(`  - ${key}: ${file1[key]}`);
    } else if (file1[key] !== file2[key]) {
      result.push(`  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`)
    } else {
      result.push(`    ${key}: ${file1[key]}`);
    }  
}
return `{\n${result.join('\n')} \n}`;
};

export default genDiff;
