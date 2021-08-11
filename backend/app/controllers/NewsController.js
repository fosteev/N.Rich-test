const BaseController = require('./BaseController');
const NewsService = require('../services/NewsService');

class NewsController extends BaseController {
    constructor() {
        super();

        this.newsService = new NewsService();
    }

    async getAll(req, res) {
        try {
            console.log(this);

            const news = await this.newsService.getAll();

            res.json(news);
        } catch (e) {
            res.status(500);
            console.log(e);
            res.send(e.message);
        }
    }
}

module.exports = NewsController;
