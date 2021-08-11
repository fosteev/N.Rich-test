const BaseModel = require('./BaseModel');

const news = [{
    header: 'Test',
    text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,'
}, {
    header: 'user',
    text: ' При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце'
}]

class NewsModel extends BaseModel {
    getAll() {
        return news;
    }
}

module.exports = NewsModel;
