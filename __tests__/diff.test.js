import readFile from '../src/read_file.js';
import genDiff from '../src/diff.js';

test('genDiff JSON', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(readFile('expected_json.txt'));
});

test('genDiff YML', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(readFile('expected_json.txt'));
});
