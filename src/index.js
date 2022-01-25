import diff from './diff.js';
import stylish from './formatter.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const tree = diff(filepath1, filepath2);
  return stylish(tree, format);
};

export default genDiff;
