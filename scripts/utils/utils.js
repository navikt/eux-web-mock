const fs = require('fs');
const path = require('path');

module.exports.baseName = (filename) => {
  const ext = path.extname(filename);
  return path.basename(filename, ext);
};

module.exports.isJSON = (str) => {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
};

module.exports.writeFileAsync = async (filepath, text) => new Promise((resolve, reject) => {
  fs.writeFile(filepath, 'utf8', text, (err) => {
    if (err) reject(err);
    else resolve();
  });
});
module.exports.writeFileSync = (filepath, text) => fs.writeFileSync(filepath, text);

module.exports.readFileAsync = async (filepath) => new Promise((resolve, reject) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf8');
module.exports.readFileSync = readFileSync;
module.exports.readJsonAndParseSync = (filepath) => JSON.parse(readFileSync(filepath));

module.exports.readJsonAndParseAsync = async (filepath) => {
  const json = await readFileSync(filepath);
  return JSON.parse(json);
};

module.exports.existsSync = (filepath) => fs.existsSync(filepath);

module.exports.existsAsync = async (filepath) => new Promise((resolve) => {
  fs.access(filepath, fs.constants.F_OK, (err) => {
    if (err) {
      // TOOO add logger.error(err)
      return resolve(false);
    }
    return resolve(true);
  });
});

module.exports.readDirAsync = async (dirpath) => new Promise((resolve, reject) => {
  fs.readdir(dirpath, 'utf8', (err, files) => {
    if (err) return reject(err);
    return resolve(files);
  });
});

module.exports.readDirSync = (dirpath) => fs.readdirSync(dirpath, 'utf8');
