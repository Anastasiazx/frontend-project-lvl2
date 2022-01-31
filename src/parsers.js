import yaml from 'js-yaml';

const parsersMapper = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (file, fileFormat) => {
  const parsedFile = parsersMapper[fileFormat];
  return parsedFile(file);
};
