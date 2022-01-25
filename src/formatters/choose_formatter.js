import stylish from './formatter_stylish.js';
import plain from './formatter_plain.js';

const chooseFormatters = (resultingTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(resultingTree);

    case 'plain':
      return plain(resultingTree);

    default:
      throw new Error(`TypeError: ${format}`);
  }
};

export default chooseFormatters;
