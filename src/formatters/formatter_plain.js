const significance = (value) => {
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
          return `Property '${path}' was added with value: ${significance(child.currentValue)}`;

        case 'deleted':
          return `Property '${path}' was removed`;

        case 'recursion':
          return `${plainFormat(child.children, path)}`;

        case 'changed':
          return `Property '${path}' was updated. From ${significance(child.currentValue1)} to ${significance(child.currentValue2)}`;

        default:
          throw new Error(`TypeError: ${child.type}`);
      }
    }).join('\n');

  return plainFormat(resultingTree, 0);
};

export default plain;
