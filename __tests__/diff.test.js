import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff JSON, format = stylish', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'))).toEqual(readFile('expected_filepath_stylish.txt'));
});

test('genDiff YML, format = stylish', () => {
  expect(genDiff(getFixturePath('filepath1.yaml'), getFixturePath('filepath2.yaml'))).toEqual(readFile('expected_filepath_stylish.txt'));
});

test('genDiff JSON & YML, format = stylish', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.yaml'))).toEqual(readFile('expected_filepath_stylish.txt'));
});

test('genDiff JSON, format = plain', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'), 'plain')).toEqual(readFile('expected_filepath_plain.txt'));
});

test('genDiff YML, format = plain', () => {
  expect(genDiff(getFixturePath('filepath1.yaml'), getFixturePath('filepath2.yaml'), 'plain')).toEqual(readFile('expected_filepath_plain.txt'));
});

test('genDiff JSON & YML, format = plain', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.yaml'), 'plain')).toEqual(readFile('expected_filepath_plain.txt'));
});

test('genDiff JSON, format = json', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'), 'json')).toEqual(readFile('expected_filepath_json.txt'));
});

test('genDiff YAML, format = json', () => {
  expect(genDiff(getFixturePath('filepath1.yaml'), getFixturePath('filepath2.yaml'), 'json')).toEqual(readFile('expected_filepath_json.txt'));
});

test('genDiff JSON & YML, format = json', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.yaml'), 'json')).toEqual(readFile('expected_filepath_json.txt'));
});
