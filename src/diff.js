import _ from 'lodash';

const calcDiff = (filepath1, filepath2) => {
  const keysObject1 = Object.keys(filepath1);
  const keysObject2 = Object.keys(filepath2);

  const keysObj = _.union(keysObject1, keysObject2);
  const keysObjects = _.sortBy(keysObj);
  return keysObjects.map((key) => {
    const value1 = filepath1[key];
    const value2 = filepath2[key];
    if (!_.has(filepath1, key)) {
      return { type: 'added', key, currentValue: value2 };
    } if (!_.has(filepath2, key)) {
      return { type: 'deleted', key, currentValue: value1 };
    } if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'nested', key, children: calcDiff(value1, value2) };
    } if (filepath1[key] !== filepath2[key]) {
      return {
        type: 'changed', key, currentValue1: value1, currentValue2: value2,
      };
    }
    return { type: 'unchanged', key, currentValue: value1 };
  });
};

export default calcDiff;
