const BaseService = require('./BaseService');
const NewsModel = require('../models/NewsModel');

class NewsService extends BaseService {
    constructor() {
        super();

        this.newsModel = new NewsModel();
    }

    async getAll() {
        return this.newsModel.getAll();
    }
}

module.exports = NewsService;
