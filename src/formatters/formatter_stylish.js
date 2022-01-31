const indentSize = (depth, replacer = ' ', spaceCount = 4) => replacer.repeat(depth * spaceCount - 2);

const stringify = (currentValue, currentDepth) => {
  if (typeof currentValue !== 'object') {
    return `${currentValue}`;
  } if (currentValue === null) {
    return null;
  }

  const lines = Object
    .entries(currentValue)
    .map(([key, value]) => `${indentSize(currentDepth + 1)}  ${key}: ${stringify(value, currentDepth + 1)}`);

  return [
    '{',
    ...lines,
    `${indentSize(currentDepth)}  }`,
  ].join('\n');
};

const stylish = (resultingTree) => {
  const style = (tree, depth) => tree.map((val) => {
    const getStylish = (value, sign) => `${indentSize(depth)}${sign} ${val.key}: ${stringify(value, depth)}\n`;
    switch (val.type) {
      case 'added':
        return getStylish(val.currentValue, '+');

      case 'deleted':
        return getStylish(val.currentValue, '-');

      case 'nested':
        return `${indentSize(depth)}  ${val.key}: {\n${style(val.children, depth + 1).join('')}${indentSize(depth)}  }\n`;

      case 'changed':
        return `${getStylish(val.currentValue1, '-')}${getStylish(val.currentValue2, '+')}`;

      case 'unchanged':
        return getStylish(val.currentValue, ' ');

      default:
        throw new Error(`TypeError: ${val.type}`);
    }
  });

  return `{\n${style(resultingTree, 1).join('')}}`;
};

export default stylish;
