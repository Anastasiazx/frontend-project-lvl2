const stringify = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  } if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  } if (value === null) {
    return null;
  }
  return String(value);
};

const plain = (resultingTree) => {
  const plainFormat = (children, parent) => children
    .filter((child) => child.type !== 'unchanged')
    .map((child) => {
      const path = parent ? `${parent}.${child.key}` : child.key;
      switch (child.type) {
        case 'added':
          return `Property '${path}' was added with value: ${stringify(child.currentValue)}`;

        case 'deleted':
          return `Property '${path}' was removed`;

        case 'nested':
          return `${plainFormat(child.children, path)}`;

        case 'changed':
          return `Property '${path}' was updated. From ${stringify(child.currentValue1)} to ${stringify(child.currentValue2)}`;

        default:
          throw new Error(`TypeError: ${child.type}`);
      }
    }).join('\n');

  return plainFormat(resultingTree, 0);
};

export default plain;
