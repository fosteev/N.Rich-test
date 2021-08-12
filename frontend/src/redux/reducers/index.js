import { combineReducers } from "redux";

import profile from "./profile";
import news from './news';

export default combineReducers({
    profile,
    news
});
