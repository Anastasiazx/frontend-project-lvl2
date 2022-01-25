import readFile from '../src/read_file.js';
import genDiff from '../src/index.js';

test('genDiff JSON, format = stylish', () => {
  expect(genDiff('filepath1.json', 'filepath2.json')).toEqual(readFile('expected_filepath_stylish.txt'));
});

test('genDiff YML, format = stylish', () => {
  expect(genDiff('filepath1.yaml', 'filepath2.yaml')).toEqual(readFile('expected_filepath_stylish.txt'));
});

test('genDiff JSON, format = plain', () => {
  expect(genDiff('filepath1.json', 'filepath2.json', 'plain')).toEqual(readFile('expected_filepath_plain.txt'));
});

test('genDiff YML, format = plain', () => {
  expect(genDiff('filepath1.yaml', 'filepath2.yaml', 'plain')).toEqual(readFile('expected_filepath_plain.txt'));
});
