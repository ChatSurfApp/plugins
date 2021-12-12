const fs = require("fs");
const _ = require("lodash")

class Config {
  constructor(dir) {
    this.dir = dir;

    if (fs.existsSync(dir)) {
      this.contents = fs.readFileSync(dir).toString();
    } else {
      this.contents = "{}";
      fs.appendFileSync(dir, this.contents);
    }
  }
  
  get(key) {
    return _.get(JSON.parse(this.contents), key)
  }
  
  set(key, value) {
    var obj = JSON.parse(this.contents)
    _.set(obj, key, value)
    this.contents = JSON.stringify(obj)
    fs.writeFileSync(this.dir, this.contents)
  }
}

function loadConfig(filename) {
  return new Config(filename.slice(0, filename.length - 3) + ".config.json");
}

module.exports = {
  loadConfig,
  ignoreplugin: true
};
