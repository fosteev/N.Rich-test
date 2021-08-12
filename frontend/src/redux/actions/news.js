export const GET_NEWS = 'GET_NEWS';

export function setNews(data) {
    return {
        type: GET_NEWS,
        data: data
    }
}
