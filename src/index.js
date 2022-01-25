import diff from './diff.js';
import chooseFormatters from './formatters/choose_formatter.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const tree = diff(filepath1, filepath2);
  return chooseFormatters(tree, format);
};

export default genDiff;
