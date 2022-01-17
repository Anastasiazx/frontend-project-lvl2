import genDiff from '../src/diff.js';

test('test 1', () => {
  const actual = genDiff({}, {});
  expect(actual).toEqual({});
});

test('test 2', () => {
  const actual = genDiff({}, { verbose: 'true' });
  const expected = `  + ${{ verbose: 'true' }}}`;
  expect(actual).toEqual(expected);
});

test('test 3', () => {
  const actual = genDiff({ proxy: '123.234.53.22' }, {});
  const expected = `  - ${{ proxy: '123.234.53.22' }}`;
  expect(actual).toEqual(expected);
});

test('test 4', () => {
  const actual = genDiff({ timeout: '50' }, { timeout: '20' });
  const expected = `  - ${{ timeout: '50' }}\n  + ${{ timeout: '20' }}`;
   expect(actual).toEqual(expected);
});

test('test 5', () => {
  const actual = genDiff({ host: 'hexlet.io' }, { host: 'hexlet.io' });
  const expected = `    ${{ host: 'hexlet.io' }}`;
  expect(actual).toEqual(expected);
});
