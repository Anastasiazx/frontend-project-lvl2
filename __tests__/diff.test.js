import readFile from '../src/read_file.js';
import genDiff from '../src/diff.js';

test('genDiff JSON', () => {
  expect(genDiff('filepath1.json', 'filepath2.json')).toEqual(readFile('expected_filepath_json.txt'));
});

test('genDiff YML', () => {
  expect(genDiff('filepath1.yaml', 'filepath2.yaml')).toEqual(readFile('expected_filepath_json.txt'));
});
