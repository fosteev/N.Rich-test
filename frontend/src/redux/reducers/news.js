import { GET_NEWS } from "../actions/news";

const initialState = {
    items: []
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS: {
            return {
               items: action.data
            }
        }
        default:
            return state;
    }
}
