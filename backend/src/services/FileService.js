/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
const fs = require('fs').promises;
const FS = require('fs');
const debug = require('debug')('app:FileService');
const Path = require('path');

class FileService {
  constructor(fileModel, path, fileName) {
    this.fileModel = fileModel;
    this.path = path;
    this.fileName = fileName;
  }

  async getData(url, token) {
    debug(`getting data from: ${process.env.URL}${url}`);
    const { data } = await this.fileModel.get(url.concat(token));
    return data;
  }

  async postData(url, form) {
    debug(`posting data on: ${process.env.URL}${url}`);
    const response = await this.fileModel.post(url, form, {
      headers: form.getHeaders(),
    });
    return response;
  }

  async readFile() {
    debug(`retriving file from: ${this.path}/${this.fileName}`);
    try {
      const file = FS.createReadStream(Path.join(this.path, this.fileName));
      return file;
    } catch (err) {
      debug(err);
      throw err;
    }
  }

  // eslint-disable-next-line consistent-return
  async isDirectory() {
    try {
      const stats = await fs.lstat(this.path);
      return stats.isDirectory();
    } catch (err) {
      if (err.code === 'ENOENT') return false;
    }
  }

  async createDir() {
    try {
      await fs.mkdir(this.path, '777');
      debug(`creating a dir at: ${this.path}`);
    } catch (err) {
      throw err.stack;
    }
    return true;
  }

  async saveAsJson(data) {
    if (!await this.isDirectory(this.path)) {
      await this.createDir(this.path);
    }
    await fs.writeFile(Path.join(this.path, this.fileName), data, { mode: '777' });
    debug(`creating a file: ${this.fileName}`);
  }

  decipher(data) {
    const NumberSpaceCommaDot = /\d|\s|,|\./;
    let i = 0;
    let deciphered = '';

    const shift = data.numero_casas;
    const ciphered = data.cifrado;

    ciphered.toLocaleLowerCase();

    for (i = 0; i < ciphered.length; i++) {
      const letter = ciphered.charAt(i);
      if (!NumberSpaceCommaDot.test(letter)) {
        const moved = letter.charCodeAt(0) - shift;
        if (moved < 97) {
          deciphered += String.fromCharCode(moved + 26);
        } else {
          deciphered += String.fromCharCode(moved);
        }
      } else {
        deciphered += letter;
      }
    }
    return deciphered;
  }
}

module.exports = FileService;
