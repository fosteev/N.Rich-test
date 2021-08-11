class Configuration {
    constructor() {
        const fs = require("fs");
        const jsonContent = JSON.parse(fs.readFileSync("config.json"));
        this.api = jsonContent.api;
        this.imagesUrl = jsonContent.images;
    }

    getBackendUrl() {
        return this.api;
    }

    getImagesUrl() {
        return this.imagesUrl;
    }
}

module.exports = Configuration;