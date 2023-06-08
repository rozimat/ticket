const fsPromises = require('fs').promises;


class Io {
    constructor(dir) {
        this.dir = dir;
    }
    async read() {
        const data = await fsPromises.readFile(this.dir, "utf-8")
        return data ? JSON.parse(data) : []
    }
    async write(data) {
       await  fsPromises.writeFile(this.dir, JSON.stringify(data, null, 2), "utf-8")
    }
  
}

module.exports = Io